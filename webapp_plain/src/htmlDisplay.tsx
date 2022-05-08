import {createElement} from './tools/jsxFactory';
import {Order, Product} from './data/entities';
import {AbstractDataSource} from './data/abstractDataSource';
import {ProductList} from './productList';
import {ALL_CATEGORY} from './categoryList';
import {Header} from './header';
import {OrderDetails} from './orderDetails';
import {Summary} from './summary';

enum DisplayMode {
    List,
    Details,
    Complete
}

export class HtmlDisplay {
    private containerElem: HTMLElement;
    private selectedCategory: string;
    private mode: DisplayMode = DisplayMode.List;
    private orderId: number;
    private times = 0;

    constructor() {
        this.containerElem = document.createElement('div');
    }

    props: {
        dataSource: AbstractDataSource,
    };

    addToOrder = (product: Product, quantity: number) => {
        this.props.dataSource.order.addProduct(product, quantity);
        this.updateContent();
    };

    selectCategory = (selected: string) => {
        this.selectedCategory = selected === ALL_CATEGORY ? undefined : selected;
        this.updateContent();
    };

    async updateContent() {
        const products = await this.props.dataSource.getProducts('id', this.selectedCategory);
        const categories = await this.props.dataSource.getCategories();
        this.containerElem.innerHTML = '';

        let contentElem: HTMLElement;

        // eslint-disable-next-line default-case
        switch (this.mode) {
        case DisplayMode.List:
            contentElem = this.getListContent(products, categories);
            break;

        case DisplayMode.Details:
            contentElem = <OrderDetails
                order={this.props.dataSource.order}
                cancelCallback={this.showList}
                submitCallback={this.submitOrder}
            />;
            break;

        case DisplayMode.Complete:
            contentElem = <Summary orderId={this.orderId} callback={this.showList} />;
            break;
        }

        this.containerElem.appendChild(contentElem);
    }

    getListContent(products: Product[], categories: string[]): HTMLElement {
        return (
            <div>
                <Header
                    order={this.props.dataSource.order}
                    submitCallback={this.showDetails}
                />
                <ProductList
                    products={products}
                    categories={categories}
                    selectedCategory={this.selectedCategory}
                    addToOrderCallback={this.addToOrder}
                    filterCallback={this.selectCategory}
                />
            </div>
        );
    }

    showDetails = () => {
        this.mode = DisplayMode.Details;
        this.updateContent();
    };

    showList = () => {
        this.mode = DisplayMode.List;
        this.updateContent();
    };

    submitOrder = async () => {
        const id = await this.props.dataSource.storeOrder();
        this.orderId = id;
        this.props.dataSource.order = new Order();
        this.mode = DisplayMode.Complete;
        this.updateContent();
    };

    async getContent(): Promise<HTMLElement> {
        await this.updateContent();
        return this.containerElem;
    }
}

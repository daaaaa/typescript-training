// eslint-disable-next-line no-unused-vars
import {createElement} from './tools/jsxFactory';
import {Product} from './data/entities';
import {AbstractDataSource} from './data/abstractDataSource';
import {ProductList} from './productList';
import {ALL_CATEGORY} from './categoryList';

export class HtmlDisplay {
    private containerElem: HTMLElement;
    private selectedCategory: string;

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
        const content = (
            <div>
                <ProductList
                    products={products}
                    categories={categories}
                    selectedCategory={this.selectedCategory}
                    addToOrderCallback={this.addToOrder}
                    filteCallback={this.selectCategory}
                />
            </div>
        );
        this.containerElem.appendChild(content);
    }

    async getContent(): Promise<HTMLElement> {
        await this.updateContent();
        return this.containerElem;
    }
}

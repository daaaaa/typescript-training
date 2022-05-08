import {Product, Order} from './entities';
import {minimumValue} from '../decorators';

export type ProductProp = keyof Product

export abstract class AbstractDataSource {
    private products: Product[];
    private categories: Set<string>;
    public order: Order;
    public loading: Promise<void>;

    constructor() {
        this.products = [];
        this.categories = new Set<string>();
        this.order = new Order();
        this.loading = this.getData();
    }

    @minimumValue('price', 30)
    async getProducts(sortProp: ProductProp = 'id', category?: string): Promise<Product[]> {
        await this.loading;
        return this.selectProducts(this.products, sortProp, category);
    }

    protected async getData(): Promise<void> {
        this.products = [];
        this.categories.clear();
        const rawData = await this.loadProducts();
        rawData.forEach(product => {
            this.products.push(product);
            this.categories.add(product.category);
        });
    }

    protected selectProducts(
        prods: Product[],
        sortProp: ProductProp,
        category?: string,
    ): Product[] {
        return prods
            .filter(p => category === undefined || p.category === category)
            .sort((p1, p2) => p1[sortProp] < p2[sortProp]
                ? -1
                : p1[sortProp] > p2[sortProp] ? 1 : 0);
    }

    async getCategories(): Promise<string[]> {
        await this.loading;
        return [...this.categories.values()];
    }

    protected abstract loadProducts(): Promise<Product[]>;
    abstract storeOrder(): Promise<number>;
}

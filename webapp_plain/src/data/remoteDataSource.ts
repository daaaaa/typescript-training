import {AbstractDataSource} from './abstractDataSource';
import {Product, Order} from './entities';
import axios from 'axios';

const protocol = 'http';
const hostname = 'localhost';
const port = 4600;

const urls = {
    products: `${protocol}://${hostname}:${port}/products`,
    orders: `${protocol}://${hostname}:${port}/orders`,
};

export class RemoteDataSource extends AbstractDataSource {
    async loadProducts(): Promise<Product[]> {
        const response = await axios.get(urls.products);
        return response.data;
    }

    async storeOrder(): Promise<number> {
        const orderData = {
            lines: [...this.order.orderLines.values()].map(ol => ({
                productId: ol.product.id,
                productName: ol.product.name,
                quantity: ol.quantity,
            })),
        };
        const response = await axios.post(urls.orders, orderData);
        return response.data.id;
    }
}

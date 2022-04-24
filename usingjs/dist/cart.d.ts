import { SportsProduct } from './product';
export default class Cart {
    customerName: string;
    private items;
    constructor(customerName: string);
    addProduct(product: SportsProduct, quantity: number): number;
    get totalPrice(): number;
    get itemCount(): number;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CartItem {
    constructor(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    get totalPrice() {
        return this.quantity * this.product.price;
    }
}
class Cart {
    constructor(customerName) {
        this.customerName = customerName;
        this.items = new Map();
    }
    addProduct(product, quantity) {
        if (this.items.has(product.id)) {
            const item = this.items.get(product.id);
            item.quantity += quantity;
            return item.quantity;
        }
        this.items.set(product.id, new CartItem(product, quantity));
        return quantity;
    }
    get totalPrice() {
        return [...this.items.values()].reduce((total, item) => total + item.totalPrice, 0);
    }
    get itemCount() {
        return [...this.items.values()].reduce((total, item) => total + item.quantity, 0);
    }
}
exports.default = Cart;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const debug = require("debug");
const product_1 = require("./product");
const cart_1 = require("./cart");
const formatters_1 = require("./formatters");
const kayak = new product_1.SportsProduct(1, 'Kayak', 275, product_1.SPORT.Watersports);
const hat = new product_1.SportsProduct(2, 'Hat', 22.10, product_1.SPORT.Watersports);
// const ball = new SportsProduct(3, 'Soccer Ball', 19.5, SPORT.Soccer);
const cart = new cart_1.default('Bob');
cart.addProduct(kayak, 1);
cart.addProduct(hat, 1);
cart.addProduct(hat, 2);
(0, formatters_1.sizeFormatter)('Cart', cart.itemCount);
(0, formatters_1.costFormatter)('Cart', cart.totalPrice);
const db = debug('Example App', true);
db.enabled = true;
db('message: %o', 'Test message');

import {LocalDataSource} from './data/localDataSource';

async function displayData(): Promise<string> {
    const ds = new LocalDataSource();
    const allProducts = await ds.getProducts('name');
    const categories = await ds.getCategories();
    const chessProducts = await ds.getProducts('name', 'Chess');

    let result = '';
    allProducts.forEach(product => {
        result += `Product: ${product.name}, ${product.category}\n`;
    });
    categories.forEach(category => {
        result += `Category: ${category}\n`;
    });
    chessProducts.forEach(product => ds.order.addProduct(product, 1));
    result += `Order total: ($${ds.order.total.toFixed(2)})`;
    return result;
}

displayData()
    .then(result => console.log(result));


import {ProductList} from '../productList';
import {modifyOrder} from './actionCreators';
import {connect} from 'react-redux';
import {StoreData} from './type';

const mapStateToProps = (data: StoreData) => ({
    products: data.products,
    categories: [...new Set(data.products.map(p => p.category))],
    order: data.order,
});

const mapDispatchToProps = {
    addToOrder: modifyOrder,
};

const connectFunction = connect(mapStateToProps, mapDispatchToProps);
// eslint-disable-next-line @typescript-eslint/naming-convention
export const ConnectedProductList = connectFunction(ProductList);

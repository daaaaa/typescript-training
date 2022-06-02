import React, {Component} from 'react';
// Import {Product, Order} from './data/entities';
// import {ProductList} from './productList';

import {dataStore} from './data/dataStore';
import {Provider} from 'react-redux';
import {HttpHandler} from './data/httpHandler';
import {addProduct} from './data/actionCreators';
import {ConnectedProductList} from './data/productListConnector';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface Props {
}

export default class App extends Component<Props> {
    private readonly httpHandler = new HttpHandler();

    componentDidMount = () => {
        this.httpHandler.loadProducts(data => {
            dataStore.dispatch(addProduct(...data));
        });
    };

    render = () =>
        <div className="App">
            <Provider store={dataStore}>
                <ConnectedProductList/>
            </Provider>
        </div>;
}

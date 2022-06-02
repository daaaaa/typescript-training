import {createStore, Store} from 'redux';
import {StoreReducer} from './reducer';
import {StoreAction, StoreData} from './type';

export const dataStore: Store<StoreData, StoreAction> = createStore(StoreReducer);

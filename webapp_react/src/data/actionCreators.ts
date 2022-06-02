import {ACTIONS, AddProductdAction, ModifyOrderAction, ResetOrderAction} from './type';
import {Product} from './entities';

export const addProduct = (...products: Product[]): AddProductdAction => ({
    type: ACTIONS.ADD_PRODUCT,
    payload: products,
});

export const modifyOrder = (product: Product, quantity: number): ModifyOrderAction => ({
    type: ACTIONS.MODIFY_ORDER,
    payload: {product, quantity},
});

export const resetOrder = (): ResetOrderAction => ({
    type: ACTIONS.RESET_ORDER,
});

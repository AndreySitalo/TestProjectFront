const initialState = {
    products: [],
}

export const ActionTypes = {
    SET_PRODUCTS: 'SET_PRODUCTS',
    SET_PRODUCT: 'SET_PRODUCT',
}

export const ActionCreators = {
    setProducts: payload => ({ type: ActionTypes.SET_PRODUCTS, payload }),
    setProduct: payload => ({ type: ActionTypes.SET_PRODUCT, payload }),
}

export default function ProductsReducer(state = initialState, action) {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return {...state, products:[...action.payload]};
        case ActionTypes.SET_PRODUCT:
            return state.products.push(action.payload);
        default:
            return state;
    }
}
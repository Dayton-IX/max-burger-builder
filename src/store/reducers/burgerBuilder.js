import * as actionTypes from '../actions/actionTypes';

const initialState = {
    ingredients: {
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    },
    totalPrice: 4
};

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7
};

const reducer = (state = initialState, action) => {
    switch (action.type){
        case actionTypes.ADD_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.name]: state.ingredients[action.payload.name] + 1
                },
                totalPrice: state.totalPrice + INGREDIENT_PRICES[action.payload.name]
            };
        case actionTypes.REMOVE_INGREDIENT:
            return {
                ...state,
                ingredients: {
                    ...state.ingredients,
                    [action.payload.name]: state.ingredients[action.payload.name] - 1
                },
                totalPrice: state.totalPrice - INGREDIENT_PRICES[action.payload.name]
            };
        default: 
            return state;
    }
};

export default reducer;
import {cart} from '../actions/actions.js'
const initialState = {
    itemsInCart : 0, 
    items : []
}

export default (state = initialState , action)=>{
    switch(action.type)
    {
        case cart.ADD_TO_CART:
            return {
                ...state, itemsInCart : state.itemsInCart+1, items : [...state.items,action.payload]
            }
        default:
            return state
    }
}
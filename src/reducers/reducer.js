import {cart} from '../actions/actions.js'
const initialState = {
    no : 0,
}

export default (state = initialState , action)=>{
    switch(action.type)
    {
        case cart.ADD_TO_CART:
            return {
                ...state, no : state.no + 1
            }
        default:
            return state
    }
}
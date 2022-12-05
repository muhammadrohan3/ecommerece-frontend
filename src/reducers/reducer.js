import {test} from '../actions/actions.js'
const initialState = {
    no : 0,
}

export default (state = initialState , action)=>{
    switch(action.type)
    {
        case test.Test:
            return {
                ...state, no : state.no + 1
            }
        default:
            return state
    }
}
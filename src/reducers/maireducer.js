import { combineReducers } from "redux";
import reducer from "./reducer"
import cartreducer from "./cartreducer";

const rootReducer = combineReducers({
    reducer : reducer,
    cart : cartreducer
})

export default rootReducer; 
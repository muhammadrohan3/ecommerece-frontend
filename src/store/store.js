import { configureStore } from '@reduxjs/toolkit'
import rootReducer from '../reducers/maireducer'
import reducer from '../reducers/reducer'
export default configureStore({reducer : rootReducer})
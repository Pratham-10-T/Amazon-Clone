import { getProductsReducer } from "./ProductsReducer";
import { combineReducers } from "redux"

const rootReducers = combineReducers({
    getproductsdata:getProductsReducer
})

export default rootReducers;
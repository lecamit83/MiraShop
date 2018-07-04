import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";

const appStore = combineReducers({
    textSearch : searchReducer,
    products : productReducer,
    login : loginReducer,
});
export default appStore;
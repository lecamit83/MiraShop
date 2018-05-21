import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";
import companyReducer from "./companyReducer";
import loginReducer from "./loginReducer";
const appStore = combineReducers({
    textSearch : searchReducer,
    products : productReducer,
    companys: companyReducer,
    login : loginReducer,
});
export default appStore;
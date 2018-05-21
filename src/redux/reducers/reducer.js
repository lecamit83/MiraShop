import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";
import companyReducer from "./companyReducer";
import companyProductReducer from "./companyProductReducer";
import loginReducer from "./loginReducer";
const appStore = combineReducers({
    textSearch : searchReducer,
    products : productReducer,
    companys : companyReducer,
    companyProduct : companyProductReducer,
    login : loginReducer,
});
export default appStore;
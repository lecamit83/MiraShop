import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import productReducer from "./productReducer";
import loginReducer from "./loginReducer";
import companyReducer from './companyReducer';

const appStore = combineReducers({
    textSearch : searchReducer,
    products : productReducer,
    login : loginReducer,
    companys : companyReducer,
});
export default appStore;
import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
const appStore = combineReducers({
    searchReducer : searchReducer,
});
export default appStore;
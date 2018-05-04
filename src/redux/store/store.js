import {applyMiddleware, createStore} from "redux";
import thunk from "redux-thunk";
import appStore from '../reducers/reducer';

const store = createStore(appStore);
export default store;   
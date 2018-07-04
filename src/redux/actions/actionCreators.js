import * as TYPE from "../Const";
import { fetchPosts } from "../../api/getData";

export function fetchDataRequest() {
  return { type: TYPE.FETCH_REQUEST };
}
export function fetchDataSuccess(data) {
  return { type: TYPE.FETCH_SUCCESS, data };
}
export function fetchDataError() {
  return { type: TYPE.FETCH_ERROR };
}
export function fetchData() {
  return dispatch => {
    dispatch(fetchDataRequest());
    return fetchPosts().then(resJSON => {
        dispatch(fetchDataSuccess(resJSON));
    }).catch((err)=>{
        dispatch(fetchDataError());
        console.log(err);
    });
  };
}

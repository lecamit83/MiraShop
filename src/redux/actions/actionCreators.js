import * as TYPE from "../Const";
import { fetchPosts } from "../../api/getData";
import { postUser } from "../../api/postData";
// GET products
export function fetchDataRequest() {
  return { type: TYPE.FETCH_REQUEST };
}
export function fetchDataSuccess(data) {
  return { type: TYPE.FETCH_SUCCESS, data };
}
export function fetchDataError() {
  return { type: TYPE.FETCH_ERROR };
}
// POST login
export function postSignIn(account) {
  return { type: TYPE.POST_SIGN_IN, account };
}
export function fetchData() {
  return dispatch => {
    dispatch(fetchDataRequest());
    return fetchPosts()
      .then(resJSON => {
        dispatch(fetchDataSuccess(resJSON));
      })
      .catch(err => {
        dispatch(fetchDataError());
      });
  };
}
export function postData(user){
  return dispatch=>{
    return postUser(user)
    .then(resJSON => {
      dispatch(postSignIn(resJSON));
      //logic handle
    })
    .catch((err) => {
      postSignIn(err);
    });
  }
}
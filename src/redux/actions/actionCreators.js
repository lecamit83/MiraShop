import * as TYPE from "../Const";
import { fetchPosts } from "../../api/getData";
import { postUser } from "../../api/postData";
// GET products
export function fetchDataRequest() {
  return { type: TYPE.FETCH_REQUEST };
}
export function fetchDataSuccess(data, id) {
  return { type: TYPE.FETCH_SUCCESS, data, id };
}
export function fetchDataError() {
  return { type: TYPE.FETCH_ERROR };
}
// POST login
export function postSignIn(account) {
  return { type: TYPE.POST_SIGN_IN, account };
}
export function fetchData(id, page) {
  return dispatch => {
    dispatch(fetchDataRequest());
    return fetchPosts(id, page)
      .then(resJSON => {
        dispatch(fetchDataSuccess(resJSON , id));
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
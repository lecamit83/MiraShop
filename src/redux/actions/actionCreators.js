import * as TYPE from "../Const";
import { fetchPosts, fetchComp, fetchProduct } from "../../api/getData";
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
        dispatch(fetchDataSuccess(resJSON, id));
      })
      .catch(err => {
        dispatch(fetchDataError());
      });
  };
}
export function postData(user) {
  return dispatch => {
    return postUser(user)
      .then(resJSON => {
        dispatch(postSignIn(resJSON));
        //logic handle
      })
      .catch(err => {
        postSignIn(err);
      });
  };
}
//fetch List Company {Nha cung cap}
export function fetchCompanySuccess(data) {
  return { type: TYPE.FETCH_COMPANY_SUCCESS, data };
}
export function fetchCompanyError() {
  return { type: TYPE.FETCH_COMPANY_ERROR };
}
export function fetchCompany(url) {
  return dispatch => {
    return fetchComp(url)
      .then(resJSON => {
        dispatch(fetchCompanySuccess(resJSON));
      })
      .catch(err => {
        console.log(err);
        fetchCompanyError();
      });
  };
}
//fetch List Product of Company
export function fetchProductCompanySuccess(data) {
  return { type: TYPE.FETCH_PRODUCT_COMPANY_SUCCESS, data };
}
export function fetchProductCompanyError() {
  return { type: TYPE.FETCH_PRODUCT_COMPANY_ERROR };
}

export function fetchProductCompany(url) {
  return dispatch => {
    return fetchProduct(url)
      .then(resJSON => {
        console.log(resJSON);
        
        dispatch(fetchProductCompanySuccess(resJSON));
      })
      .catch(err => {
        console.log(err);
        fetchProductCompanyError();
      });
  };
}

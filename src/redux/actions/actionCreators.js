import { Toast } from "native-base";
import * as TYPE from "../Const";
import { fetchPosts, fetchComp, fetchProduct } from "../../api/getData";
import { postUser } from "../../api/postData";
import { deleteProduct } from "../../api/deleteData";
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

export function deleteProductCompanySuccess(data) {
  return { type: TYPE.DELETE_PRODUCT_COMPANY_SUCCESS, data };
}

export function fetchProductCompany(url) {
  return dispatch => {
    return fetchProduct(url)
      .then(resJSON => {
        dispatch(fetchProductCompanySuccess(resJSON));
      })
      .catch(err => {
        console.log(err);
        fetchProductCompanyError();
      });
  };
}

export function deleteProductOfCompany(user, data) {
  return dispatch => {
    return deleteProduct(user)
      .then(resJSON => {
        console.log("deleteProductOfCompany");
        
        Toast.show({
          text: resJSON.message,
          buttonText: "Okay",
          buttonTextStyle: { color: "#008000" },
          buttonStyle: { backgroundColor: "#5cb85c" }
        });
        dispatch(deleteProductCompanySuccess(data));
      })
      .catch(err => {
        console.log(err);
      });
  };
}
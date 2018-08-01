import { Toast } from "native-base";
import * as TYPE from "../Const";
import { fetchPosts, fetchComp, fetchProduct } from "../../api/getData";
import { postUser, signUpUser } from "../../api/postData";
import { deleteProduct } from "../../api/deleteData";
import deviceStorge from "../../services/deviceStorge";
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
export function postSignOut() {
  return { type: TYPE.POST_SIGN_OUT };
}
export function postSignUp() {
  return { type: TYPE.POST_SIGN_UP };
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
        if(resJSON.status) {
          deviceStorge.saveJWT(resJSON);
        }
        Toast.show({
          text: resJSON.message,
          buttonText: "Okay",
          buttonTextStyle: { color: "#008000" },
          buttonStyle: { backgroundColor: "#5cb85c" }
        });
      })
      .catch(err => {
        postSignIn(err);
      });
  };
}
export function signUp(user) {
  return dispatch => {
    return signUpUser(user)
      .then(resJSON => {
        dispatch(postSignUp());
        Toast.show({
          text: resJSON.message,
          buttonText: "Okay",
          buttonTextStyle: { color: "#008000" },
          buttonStyle: { backgroundColor: "#5cb85c" }
        });
        console.log(resJSON);
        
      })
      .catch(err => {
        console.log(err);
        
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
export function deleteProductOfCompanySuccess(data) {
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

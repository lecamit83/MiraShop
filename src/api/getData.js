import { PRODUCT_API } from "./linkAPI";
/**
 * GET product home
 * 
 */
export function fetchPosts() {
  var URL = PRODUCT_API;
  return fetch(URL, { method: "GET" }).then(res => res.json());
}

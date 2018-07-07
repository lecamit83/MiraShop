import { LOGIN_API } from "./linkAPI";
/**
 * Login API
 */
export function postUser(data) {
    var URL = LOGIN_API;
    return fetch(URL, {
        method: 'POST',
        headers : {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json; charset=UTF-8'
        },
        body: JSON.stringify(data)
    }).then(res => res.json());
}
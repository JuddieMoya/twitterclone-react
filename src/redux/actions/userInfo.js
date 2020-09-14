import { domain, handleJsonResponse, jsonHeaders } from "../helpers";
import { store } from "../index"


const url = domain + "/users/";
export const SET_CURRENT_INFO = "SET_CURRENT_INFO";

export const setUserInfo = id => dispatch => {
  const token = store.getState().auth.login.token;
  return fetch(url + id, {
    method: "GET",
    headers: {
      ...jsonHeaders,
      Authorization: `Bearer ${token}`
    }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: SET_CURRENT_INFO,
        payload: result.user
      });
    })
    .catch(err => console.log(err));
};

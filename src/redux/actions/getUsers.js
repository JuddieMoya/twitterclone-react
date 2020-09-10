import { domain, handleJsonResponse, jsonHeaders } from "../helpers/index"

export const GET_USERS = "GET_USERS"
export const GET_USERS_SUCCESS = "GET_USER_SUCCESS"
export const GET_USERS_FAILURE = "GET_USER_FAIL"
export const DELETE_USER = "DELETE_USER";



const url = domain + "/users";

export default getUsers => dispatch => {
  fetch(url)
    .then(handleJsonResponse)
    .then(data => {
      return dispatch({
        type: GET_USERS_SUCCESS,
        payload: data
      });
    })
    .catch(err => {
      console.log(err);
      return Promise.reject(
        dispatch({ type: GET_USERS_FAIL, payload: err.message })
      );
    });
};








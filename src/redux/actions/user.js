import { domain, handleJsonResponse, jsonHeaders, createActions} from "../helpers/index"

export const GET_USERS = "GET_USERS"
export const GET_USERS_SUCCESS = "GET_USER_SUCCESS"
export const GET_USERS_FAILURE = "GET_USER_FAIL"
export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
export const UPLOAD_PICTURE_SUCCESS = "UPLOAD_PICTURE_SUCCESS";
export const UPLOAD_PICTURE_FAILURE = "UPLOAD_PICTURE_FAILURE";


const url = domain + "/users";

export default users => dispatch => {
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
        dispatch({ type: GET_USERS_FAILURE, payload: err.message })
      );
    });
};

export const uploadPicture = formData => (dispatch, getState) => {
  const username = getState().auth.login.username;
  const token = getState().auth.login.token;
  dispatch({
    type: UPLOAD_PICTURE
  });

  fetch(url + `/users/${username}/picture`, {
    method: "PUT",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: formData
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: UPLOAD_PICTURE_SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({
          type: UPLOAD_PICTURE_FAILURE,
          payload: err
        })
      );
    });
};









// import { domain, jsonHeaders, handleJsonResponse } from "../helpers/index"
// import { store } from "../index";
// import { push } from "connected-react-router";

// const url = domain + "/users/"


// export const DELETE_USER = "DELETE_USER";
// export const UPLOAD_PICTURE = "UPLOAD_PICTURE";
// // export const UPLOAD_PICTURE_SUCCESS = "UPLOAD_PICTURE_SUCCESS";
// // export const UPLOAD_PICTURE_FAILURE = "UPLOAD_PICTURE_FAILURE";



// const handleDeleteUser = () => dispatch => {
//   const username = store.getState().auth.login.username;
//   const token = store.getState().auth.login.token;

//   return fetch(url + username, {
//     method: "DELETE",
//     headers: { Authorization: "Bearer " + token, ...jsonHeaders },
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       console.log(result);
//     });
// };

// export const deleteUserGoToHome = () => dispatch => {
//   return dispatch(handleDeleteUser()).then(() => dispatch(push("/")));
// };

































// export const uploadPicture = formData => (dispatch, getState) => {
//   const userId = getState().auth.login.id;
//   const token = getState().auth.login.token;
//   dispatch({
//     type: UPLOAD_PICTURE
//   });

//   fetch(url + `${userId}/picture`, {
//     method: "PUT",
//     headers: { Authorization: `Bearer ${token}` },
//     body: formData
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: UPLOAD_PICTURE_SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(
//         dispatch({
//           type: UPLOAD_PICTURE_FAILURE,
//           payload: err
//         })
//       );
//     });
// };

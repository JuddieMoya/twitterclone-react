import {
  domain,
  jsonHeaders,
  handleJsonResponse,
  getInitStateFromStorage,
  asyncInitialState,
  asyncCases,
  createActions,
  createReducer,
} from "./helpers";
const url = domain + "/messages";

const CREATEMESSAGE = createActions("newmessage");
export const newmessage = (userMsg) => (dispatch, getState) => {
  dispatch(CREATEMESSAGE.START());
  const token = getState().auth.login.result.token;
  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(userMsg),
  })
  .then(handleJsonResponse)
  .then((result) => dispatch(CREATEMESSAGE.SUCCESS(result)))
  .catch((err) => Promise.reject(dispatch(CREATEMESSAGE.FAIL(err))));
};

// let id = prompt("Please enter id of the message you'd like to delete!");
// if (id != null) {
//   const token = getState().auth.login.result.token;
//   fetch("https://kwitter-api.herokuapp.com/messages/" + id, {
//     method: "DELETE",
//     headers: { Authorization: "Bearer " + token, ...jsonHeaders },

const DELETEMESSAGE = createActions("deletemessage");
export const deletemessage = () => (dispatch, getState) => {
  dispatch(DELETEMESSAGE.START());
  const token = getState().auth.login.result.token;
  let id = prompt("Please enter id of the message you'd like to delete!");
  return fetch(url + "/" + id , {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },

  })
  .then(handleJsonResponse)
  .then((result) => dispatch(DELETEMESSAGE.SUCCESS(result)))
  .catch((err) => Promise.reject(dispatch(DELETEMESSAGE.FAIL(err))));
};
export const msgReducer = {
newmessage: createReducer(getInitStateFromStorage("newmessage", asyncInitialState), {
  ...asyncCases(CREATEMESSAGE),
}),
deletemessage: createReducer(getInitStateFromStorage("deletemessage", asyncInitialState), {
  ...asyncCases(DELETEMESSAGE),
}),
};
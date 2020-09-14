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
  const url = domain + "/likes";
  
  const ADD_LIKE = createActions("addlike");
  export const addlike = (userMsg) => (dispatch, getState) => {
    dispatch(ADD_LIKE.START());
    const token = getState().auth.login.result.token;
    return fetch("https://kwitter-api.herokuapp.com/likes", {
      method: "POST",
      headers: { Authorization: "Bearer " + token, ...jsonHeaders },
      body: JSON.stringify(userMsg),
    })
    .then(handleJsonResponse)
    .then((result) => dispatch(ADD_LIKE.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(ADD_LIKE.FAIL(err))));
  };
  

  export const likeReducer = {
  addlike: createReducer(getInitStateFromStorage("addlike", asyncInitialState), {
    ...asyncCases(ADD_LIKE),
  }),
  
  };
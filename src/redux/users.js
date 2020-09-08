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

  const url = domain + "/users";

  const CREATEUSER = createActions("newuser");
  export const newuser = (userData) => (dispatch) => {
    dispatch(CREATEUSER.START());

    return fetch(url, {
      method: "POST",
      headers: jsonHeaders,
      body: JSON.stringify(userData),
      
    })
    .then(handleJsonResponse)
    .then((result) => dispatch(CREATEUSER.SUCCESS(result)))
    .catch((err) => Promise.reject(dispatch(CREATEUSER.FAIL(err))));
};

export const userReducer = {
  newuser: createReducer(getInitStateFromStorage("newuser", asyncInitialState), {
    ...asyncCases(CREATEUSER),
  }),
 
};
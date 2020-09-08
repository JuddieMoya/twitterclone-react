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

export const msgReducer = {
  newmessage: createReducer(getInitStateFromStorage("newmessage", asyncInitialState), {
    ...asyncCases(CREATEMESSAGE),
  }),
 
};


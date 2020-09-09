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

const MESSAGELIST = createActions("getmessages");
export const getMessage = (userMsg) => (dispatch) => {
    dispatch(MESSAGELIST.START());
    
    //  const token = getState().auth.login.result.token;
    
    
    return fetch(url + "/message",
    {method:"GET"}) 
    .then(handleJsonResponse)
    .then((result) => {
        result = Object.keys(result.messages).map(key => result.messages[key]),
        dispatch(MESSAGELIST.SUCCESS(result));
        
    })
    .catch((err) => Promise.reject(dispatch(MESSAGELIST.FAIL(err))));
    
    export const msgListReducer = {
    getMessage: createReducer(getInitStateFromStorage("getmessages", asyncInitialState), {
    ...asyncCases(MESSAGELIST),
    
    }),
    
    }
    

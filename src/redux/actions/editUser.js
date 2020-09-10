import { store } from "../index"
import { domain, jsonHeaders, handleJsonResponse } from "../helpers/index"
import { push } from "connected-react-router";

export const EDIT_USER = "EDIT_USER"
const url = domain + "/users/"

export const editUser = data => dispatch => {
const token = store.getState().auth.login.token
const username = store.getState().auth.login.token

return fetch(url + username, {
    method: "PATCH",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify(data)
})
.then(handleJsonResponse)
.then(result => {
    return dispatch({
        type: EDIT_USER,
        payload: result.user
    })
})
.then(result => {
    dispatch(push("/profile"))
})
}
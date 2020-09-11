export const ADD_LIKE = "ADD_LIKE";
export const ADD_LIKE_SUCCESS = "ADD_LIKE_SUCCESS";
export const ADD_LIKE_FAILURE = "ADD_LIKE_FAILURE";
export const REMOVE_LIKE = "REMOVE_LIKE";

const url = domain + "/likes";

export default addLike => dispatch => {
    fetch(url)
      .then(handleJsonResponse)
      .then(data => {
        return dispatch({
          type: ADD_LIKE_SUCCESS,
          payload: data
        });
      })
      .catch(err => {
        console.log(err);
        return Promise.reject(
          dispatch({ type: ADD_LIKE_FAILURE, payload: err.message })
        );
      });
  };
  
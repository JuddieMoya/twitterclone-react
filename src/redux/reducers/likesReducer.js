import {
    ADD_LIKE,
    ADD_LIKE_SUCCESS,
    ADD_LIKE_FAILURE,
    REMOVE_LIKE
  } from "../actions/likesAction";


const initialState = {
    usersList: [],
    getUserError: null,
    user: null,
    loading: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case ADD_LIKE:
        return { ...state,
         loading: true,
         };
      case ADD_LIKE_SUCCESS:
        return {
          ...state,
          likesCount: action.payload
        };
      case ADD_LIKE_FAILURE:
        return {
          likesCount: [...state.likes, ...action.payload.likes]
        };  
    }  
}
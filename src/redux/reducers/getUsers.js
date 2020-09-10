import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE
  } from "../actions/getUsers";

  const initialState = {
    usersList: [],
    getUserError: null,
    user: null,
    loading: false
  };
  


export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS:
        return { ...state,
         loading: true,
         };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          usersList: action.payload.users
        };
      case GET_USERS_FAILURE:
        return {
          usersList: [...state.users, ...action.payload.users]
        };  
    }  
}
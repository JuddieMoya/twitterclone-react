import {GET_USERS, GET_USERS_SUCCESS, GET_USERS_FAIL} from "../actions/users"

const initialState = {
    usersList: [],
    uploadPictureError: null,
    uploadPictureLoading: false,
    getUserError: null,
    user: null,
    getUserLoading: false
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS:
        return { ...state };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          usersList: action.payload.users
        };
      case GET_USERS_FAIL:
        return {
          usersList: [...state.users, ...action.payload.users]
        }
    }
}
import {
    GET_USERS,
    GET_USERS_SUCCESS,
    GET_USERS_FAILURE,
    UPLOAD_PICTURE,
    UPLOAD_PICTURE_SUCCESS,
    UPLOAD_PICTURE_FAILURE
} from "../actions/user";


  const initialState = {
    username: "",
    displayname: "",
    loading: false,
    error: "",
    uploadPictureError: null,
  uploadPictureLoading: false,
  };
  


export default (state = initialState, action) => {
    switch (action.type) {
      case GET_USERS:
        return { 
          ...state,
         loading: true,
         };
      case GET_USERS_SUCCESS:
        return {
          ...state,
          username: action.payload.users,
          loading: false,
          error: "",
        };
      case GET_USERS_FAILURE:
        return {
          username: [...state.users, ...action.payload.users]
        };
        case UPLOAD_PICTURE:
      return {
        ...state,
        uploadPictureLoading: true,
        uploadPictureError: null
      };
    case UPLOAD_PICTURE_SUCCESS:
      return {
        ...state,
        uploadPictureLoading: false
      };
    case UPLOAD_PICTURE_FAILURE:
      return {
        ...state,
        uploadPictureError: action.payload
      };
    default:
      return state;
   }     
 }
    




















        // case UPLOAD_PICTURE:
        //   return {
        //     ...state,
        //     uploadPictureLoading: true,
        //     uploadPictureError: null
        //   };
        // case UPLOAD_PICTURE_SUCCESS:
        //   return {
        //     ...state,
        //     uploadPictureLoading: false
        //   };
        // case UPLOAD_PICTURE_FAILURE:
        //   return {
        //     ...state,
        //     uploadPictureError: action.payload
        //   };
        // default:
        //   return state;      
        
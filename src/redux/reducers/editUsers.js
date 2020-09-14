import {EDIT_USER} from "../actions/editUser"


const initialState = {
  displayName: "",
  about: "",
  lastUpdated: Date.now(),
  pictureLocation: null,
  username: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_USER:
      return {
        ...state,
        username: action.payload.username,
        displayName: action.payload.displayName,
        about: action.payload.about,
        lastUpdated: Date.now()
      };
    default:
      return state;
  }
};

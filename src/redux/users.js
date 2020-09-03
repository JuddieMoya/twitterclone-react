import { store } from "./";


export const updateUser = (input) => {
    let name = input.username;
    store.dispatch(addUsername(name));
}

const addUsername = (name) => {
    return {
        type: 'CHANGE_USER',
        text: name
    }
}

export const changeUsernameReducer = (state = {user: ''}, action) => {
    switch(action.type) {
        case 'CHANGE_USER':
            return {user: action.text};
        default: 
            return state;
    }
}
export const UPDATE_MESSAGE = "UPDATE_MESSAGE";
export const DELETE_MESSAGE = "DELETE_MESSAGE";


export function updateMessage() {
    return {
        type:UPDATE_MESSAGE
    }
}

export function deleteMessage() {
    return {
        type:DELETE_MESSAGE
    }
}
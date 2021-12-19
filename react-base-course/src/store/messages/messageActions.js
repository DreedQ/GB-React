export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

export const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    chatId,
    payload: message,
    author: author,
});
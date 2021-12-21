export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';

const addMessage = (chatId, message, author) => ({
    type: ADD_MESSAGE,
    chatId,
    payload: message,
    author: author,
});

export const addMessageWithThunk = (chatId, message, profileName) => (dispatch, getState) => {
    dispatch(addMessage(chatId, message, profileName));
    if (message.author !== 'Bot') {
        const botMessage =  'Bot answer';
        setTimeout(() => dispatch(addMessage(chatId, botMessage, "Bot")), 2000);
    }
}


import {ADD_MESSAGE} from "./messageActions";

const initialState = {
    // to be stored like this {[chatId]: [{id, text, author}]}
    messageList: {},
};

const messagesReducer = (state = initialState, action) => {
    switch (action?.type) {
        case ADD_MESSAGE: {
            const currentList = state.messageList[action.chatId] || [];
            return {
                ...state,
                messageList: {
                    ...state.messageList,
                    [action.chatId]: [
                        ...currentList,
                        {
                            text: action.payload,
                            id: `${action.chatId}${currentList.length}`,
                            author: action.author
                        },
                    ],
                },
            };
        }
        default:
            return state;
    }
};

export default messagesReducer;
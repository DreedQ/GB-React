import {ADD_MESSAGE, REMOVE_MESSAGE} from "./messageActions";

const initialState = {
    messageList: {},
};

const messagesReducer = (state = initialState, action) => {
    // console.log(action)
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
        case REMOVE_MESSAGE: {
            const newMessagesList = {...state.messageList};
            delete newMessagesList[action.chatId]
            return {
                messageList: newMessagesList
            }
        }
        default:
            return state;
    }
};

export default messagesReducer;
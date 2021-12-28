import {CHANGE_MESSAGES} from "./messageActions";

const initialState = {
    messages: {},
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_MESSAGES: {
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: action.payload.messages,
                },
            };
        }
        default:
            return state;
    }
};

export default messagesReducer;
import {CHANGE_CHAT} from "./chatActions";

const initialState = {
    chats: [],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_CHAT: {
            return {
                ...state,
                chats: {
                    ...state.chats, ...action.payload
                }
            };
        }

        default:
            return state;
    }
};

export default chatsReducer;
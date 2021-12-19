import {ADD_CHAT, REMOVE_CHAT} from "./chatActions";
import {nanoid} from "nanoid";

const initialState = {
    chatList: [],
};

const chatsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList,
                    {
                        id: `id${nanoid()}`,
                        name: action.payload,
                    },
                ],
            };
        case REMOVE_CHAT:
            return {
                ...state,
                chatList: [
                    ...state.chatList.filter(el => el.id !== action.payload)
                ],

            }
        default:
            return state;
    }
};



export default chatsReducer;
import {combineReducers, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/chatsReducer";
import messagesReducer from "./messages/messagesReducer";


export const store = createStore(
    combineReducers({
        profile: profileReducer,
        chats: chatsReducer,
        messages: messagesReducer,
    }), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile/profileReducer";
import chatsReducer from "./chats/chatsReducer";
import messagesReducer from "./messages/messagesReducer";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import gistsReducer from "./gists/gistsRedicer"; // localStorage

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
    messages: messagesReducer,
    gists: gistsReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);


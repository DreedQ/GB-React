import {dataBase} from "../../services/firebase";
import {child, ref, set, onChildAdded, onChildChanged} from "firebase/database";
const  messageRef = ref(dataBase, 'messages')

export const CHANGE_MESSAGES = "MESSAGES::CHANGE_MESSAGES"

const getPayloadFromSnapshot = (snapshot) => {
    const messages = [];
    snapshot.forEach((mes) => {
        messages.push(mes.val());
    });
    return { chatId: snapshot.key, messages }
}

export const addMessageWithFirebase = (chatId, message) => async () => {
    const dbMessageChildRef = child(messageRef, `${chatId}/${message.id}`) ;
    set(dbMessageChildRef, {...message})
};

export const initMessageTracking = () => (dispatch) => {
    onChildAdded(messageRef, (snapshot => {
            const payload = getPayloadFromSnapshot(snapshot);
            dispatch({
                type: CHANGE_MESSAGES,
                payload,
            })
            }));

    onChildChanged(messageRef, (snapshot => {
        const payload = getPayloadFromSnapshot(snapshot);
        dispatch({
            type: CHANGE_MESSAGES,
            payload,
        })
    }));
    // db.ref("messages").on("child_changed", (snapshot) => {
    //     const payload = getPayloadFromSnapshot(snapshot);
    //     dispatch({
    //         type: CHANGE_MESSAGES,
    //         payload,
    //     });
    // });

    // db.ref("messages").on("child_added", (snapshot) => {
    //     const payload = getPayloadFromSnapshot(snapshot);
    //     dispatch({
    //         type: CHANGE_MESSAGES,
    //         payload,
    //     });
    // });
};



// export const ADD_MESSAGE = 'MESSAGES::ADD_MESSAGE';
// export const REMOVE_MESSAGE = 'MESSAGES::REMOVE_MESSAGE';
//
// export const addMessage = (chatId, message, author) => ({
//     type: ADD_MESSAGE,
//     chatId,
//     payload: message,
//     author: author,
// });
//
// export const removeMessage = (chatId) => ({
//     type: REMOVE_MESSAGE,
//     chatId,
// });
//
// export const addMessageWithThunk = (chatId, message, profileName) => (dispatch, getState) => {
//     dispatch(addMessage(chatId, message, profileName));
//     if (message.author !== 'Bot') {
//         const botMessage =  'Bot answer';
//         setTimeout(() => dispatch(addMessage(chatId, botMessage, "Bot")), 2000);
//     }
// }


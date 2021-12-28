import {ref, set, onChildAdded, onChildChanged, onValue} from "firebase/database";
import {dataBase} from "../../services/firebase";

export const CHANGE_CHAT = "CHATS::CHANGE_CHAT";

export const addChatWithFirebase = (chat)=> async() =>{
    set(ref(dataBase, "chats/"+ chat.name), {...chat})
    // console.log(chat);
}

export const initChatTracking = () => (dispatch) => {
    onValue(ref(dataBase, 'chats'), (snapshot => {
        const payload = [];
        snapshot.forEach(chat=>{
            payload.push(chat.val())
        })
        dispatch({
            type:CHANGE_CHAT,
            payload,
        })
    }) )
    onChildAdded(ref(dataBase, 'chats'), (snapshot => {
        const payload = [];
        payload.push(snapshot.val())
        dispatch({
            type: CHANGE_CHAT,
            payload,
        })
    }));

    onChildChanged(ref(dataBase, 'chats'), (snapshot => {
        const payload = [];
        payload.push(snapshot.val())
        dispatch({
            type: CHANGE_CHAT,
            payload,
        })
    }));
}






import React from 'react';
import ChatList from "../../components/ChatList";

export const NoChat = (props) => {
    return(
        <>
            <ChatList chats={props.chats}/>
            <span>Please select a chat</span>
        </>
    )
}






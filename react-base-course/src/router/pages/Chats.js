import React from 'react';
import ChatList from "../../components/ChatList";
import {Redirect, useParams,} from "react-router-dom";
import Messages from "../../components/Messages";
import InputMessage from "../../components/InputMessage";


export default function Chats() {
    const { chatId } = useParams();
    if (!chatId) {
        return <Redirect to="/no_chat" />;
    }

    return (
            <div className="wrapper">

                <div className="messages">
                    <h3>My Chats</h3>
                    <ChatList
                        chatId={chatId}
                    />
                </div>

                <div>
                    <Messages chatId={chatId}/>
                    <InputMessage chatId={chatId}/>
                </div>
            </div>
    );
}

// export {initialChats,}
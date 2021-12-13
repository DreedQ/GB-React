import React from 'react';
import ChatList from "../../components/ChatList";
import {Redirect, useParams,} from "react-router-dom";
import Messages from "../../components/Messages";
import InputMessage from "../../components/InputMessage";

const initialChats = {
        id1: {
            name: "Chat1",
            messages: [{id:2, text: "FirstMessage", author: 'Bot' }],
        },
        id2: {
            name: "Chat2",
            messages: [{id:1, text: "FirstMessageHereToo!", author: 'User' }],
        },
    };

export default function Chats(props) {
    const { chatId } = useParams();
    // const chats = props.chats;
    // const setChats = props.setChats;

    if (!props.chats[chatId]) {
        return <Redirect to="/no_chat" />;
    }

    return (
            <div className="wrapper">

                <div className="messages">
                    <h3>My Chats</h3>
                    <ChatList
                        chats={props.chats}
                        setChats={props.setChats}
                        chatId={chatId}
                    />
                </div>

                <div>
                    <Messages messages={props.chats[chatId].messages} />
                    <InputMessage chats={props.chats} setChats={props.setChats} chatId={chatId}/>
                </div>
            </div>
    );
}

export {initialChats,}
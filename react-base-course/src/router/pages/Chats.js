import React, {useCallback, useEffect} from 'react';
import ChatList from "../../components/ChatList";
import {Redirect, useParams,} from "react-router-dom";
import Messages from "../../components/Messages";
import InputMessage from "../../components/InputMessage";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithFirebase, initMessageTracking} from "../../store/messages/messageActions";
import {getMessagesList} from "../../store/messages/selectors";

export default function Chats() {
    const { chatId } = useParams();
    const dispatch = useDispatch();
    const messageList = useSelector(getMessagesList);
    const messages = messageList[chatId];

    const onAddMessage = useCallback(
        (message) =>{
            dispatch(addMessageWithFirebase (chatId, {
                    text: message,
                    id: `${chatId}-${messages?.length || 0}-${Date.now()}`
                })
            )
        }, [chatId]
    );

    useEffect(() => {
        dispatch(initMessageTracking());
    }, [dispatch]);

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
                    <Messages messages={messages}/>
                    <InputMessage onAddMessage={onAddMessage}/>
                </div>
            </div>
    );
}

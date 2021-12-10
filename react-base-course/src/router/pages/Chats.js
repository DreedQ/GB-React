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

export default function Chats({chats, setChats}) {
    const { chatId } = useParams();

    if (!chats[chatId]) {
        return <Redirect to="/no_chat" />;
    }

    return (
            <div className="wrapper">

                <div className="messages">
                    <h3>My Chats</h3>
                    <ChatList
                        chats={chats}
                        setChats={setChats}
                        chatId={chatId}
                    />
                </div>

                <div>
                    <Messages messages={chats[chatId].messages} />
                    <InputMessage chats={chats} setChats={setChats} chatId={chatId}/>
                </div>
            </div>
    );
}

export {initialChats,}
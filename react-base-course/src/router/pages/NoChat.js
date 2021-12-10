import ChatList from "../../components/ChatList";

export const NoChat = ({chats}) => {
    return(
        <>
            <ChatList chats={chats}/>
            <span>Please select a chat</span>
        </>
    )
}






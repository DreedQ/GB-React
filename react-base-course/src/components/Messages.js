import  {useSelector} from "react-redux";
import {useCallback} from "react";
import {List, ListItem} from "@mui/material";
import {getProfileName} from "../store/profile/selectors";
import {getMessagesList} from "../store/messages/selectors";
import {getChats} from "../store/chats/selectors";


function Messages({chatId}) {
    const profileName = useSelector(getProfileName);
    const messagesList = useSelector(getMessagesList)
    const chats = useSelector(getChats)
    const renderMessage = useCallback((message, i) => (
        <ListItem key={i}>
      <span>
        {message.author === "AUTHORS.ME" ? profileName : message.author}:
       </span>
            <span>{message.text}</span>
        </ListItem>
    ), [profileName]);

    if(!messagesList[chats[chatId].id]) {
        return(
        <p>No messages</p>)
    }

    return (
        <>
           <List className='messages'>
               {messagesList[chats[chatId].id].map(el => renderMessage(el, el.id))}
           </List>
        </>

    )
}

export default Messages;
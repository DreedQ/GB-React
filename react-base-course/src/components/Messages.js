import  {useSelector} from "react-redux";
import {useCallback} from "react";
import {List, ListItem} from "@mui/material";


function Messages({chatId}) {
    const profileName = useSelector(state => state.profile.name);
    const messagesList = useSelector(state =>state.messages.messageList)


    const renderMessage = useCallback((message, i) => (
        <ListItem key={i}>
      <span>
        {message.author === "AUTHORS.ME" ? profileName : message.author}:
       </span>
            <span>{message.text}</span>
        </ListItem>
    ), [profileName]);


    if(!messagesList[chatId]) {
        return(
        <p>No messages</p>)
    }
    return (
        <>
           <List className='messages'>
               {/*{messagesList[chatId].map(el => <ListItem  className="messages_each" key={el.id}>{el.author}: {el.text}</ListItem> )}*/}
               {messagesList[chatId].map(el => renderMessage(el, el.id))}
           </List>
        </>

    )
}

export default Messages;
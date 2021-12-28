import  {useSelector} from "react-redux";
import {useCallback} from "react";
import {List, ListItem} from "@mui/material";
import {getProfileName} from "../store/profile/selectors";

function Messages({messages}) {
    const profileName = useSelector(getProfileName);

    const renderMessage = useCallback((message, i) => (
        <ListItem key={i}>
      <span>
        {message.author === "AUTHORS.ME" ? profileName : message.author}:
       </span>
            <span>{message.text}</span>
        </ListItem>
    ), [profileName]);
    if(!messages) {
        return(
        <p>No messages</p>)
    }

    return (
        <>
           <List className='messages'>
               {messages.map(el => renderMessage(el, el.id))}
           </List>
        </>

    )
}

export default Messages;
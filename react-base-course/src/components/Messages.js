import React from 'react';
import {List, ListItem} from "@mui/material";


function Messages(props) {
// console.log(messages)
    return (
        <>
           <List className="messages">
               {props.messages.map(el => <ListItem  className="messages_each" key={el.id}>{el.author}: {el.text}</ListItem> )}
           </List>
        </>

    )
}

export default Messages;
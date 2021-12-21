import React, {useState} from 'react';
import {Link} from "react-router-dom";
import {Dialog, DialogTitle, List, ListItem, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addChat, removeChat} from "../store/chats/chatActions"

const ChatList = ({ chatId }) => {
    const [visible, setVisible] = useState(false);
    const [newChatName, setNewChatName] = useState("");

    const chats = useSelector((state) => state.chats.chatList);
    const dispatch = useDispatch();

    const handleClose = () => setVisible(false);
    const handleOpen = () => setVisible(true);
    const handleChange = (e) => setNewChatName(e.target.value);

    const onAddChat = () => {
        dispatch(addChat(newChatName));
        setNewChatName("");
        handleClose();
    };

    const  onDeleteChat = (id) => {
        dispatch(removeChat(id))
    }

    return (
        <>
                <List>
                        {Object.keys(chats).map((id, i) => (
                            <ListItem key={i}>
                            <Link to={`/chats/${id}`}>
                            <b style={{color: id === chatId ? "#000000" : "grey"}}>
                        {chats[id].name}
                            </b>
                                <Button onClick={()=>onDeleteChat(chats[id].id)}>Delete</Button>
                            </Link>
                            </ListItem>
                            ))}
                </List>
                <Button className="add-chat" onClick={handleOpen}>
          Add New Chat
        </Button>
            <Dialog open={visible} onClose={handleClose}>
                <DialogTitle>Please enter a name for new chat</DialogTitle>
                <TextField value={newChatName} onChange={handleChange} />
                <Button onClick={onAddChat} disabled={!newChatName}>
                    Submit
                </Button>
            </Dialog>
        </>
    );
};

export  default ChatList
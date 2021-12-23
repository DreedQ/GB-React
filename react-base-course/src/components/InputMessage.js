import React, {useCallback, useEffect, useRef} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMessageWithThunk} from "../store/messages/messageActions";
import TextField from '@mui/material/TextField';
import {getProfileName} from "../store/profile/selectors";
import {getMessagesList} from "../store/messages/selectors";
import {getChats} from "../store/chats/selectors";

function InputMessage({chatId}){
    const profileName = useSelector(getProfileName);
    const dispatch = useDispatch();
    const chats = useSelector(getChats)

    let messagesList = useSelector(getMessagesList)

    const onAddMessage = useCallback((e) => {
        e.preventDefault()
        dispatch(addMessageWithThunk(chats[chatId].id, e.target[0].value, profileName));
        e.target[0].value = ''
    }, [chatId, dispatch, profileName]);

    const inputRef = useRef();

    useEffect(()=>{
        inputRef.current?.focus()
    }, [messagesList])

    return(
        <div>
            <form  className="form" onSubmit={onAddMessage}>
                <TextField fullWidth ref={inputRef} />
                <Button className="form_btn"  variant="contained" type='submit'  endIcon="➢" mt={2}> Send message
                </Button>
            </form>
        </div>
    )
}
export default InputMessage
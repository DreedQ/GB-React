import React, {useEffect, useRef} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addMessage} from "../store/messages/messageActions";
import TextField from '@mui/material/TextField';

function InputMessage({chatId}){
    const profileName = useSelector(state => state.profile.name);
    const dispatch = useDispatch();

    const onAddMessage = (e) => {
        e.preventDefault()
        dispatch(addMessage(chatId, e.target[0].value, profileName));
        // console.log(e.target[0].value)
        e.target[0].value  = ""
    }
    let messagesList = useSelector(state=>state.messages.messageList)

    useEffect(()=>{
        if(messagesList[chatId]){
            let index = messagesList[chatId].length
            let messageBot = "Wow! You so smart"
            if(messagesList[chatId][0]){
                if(messagesList[chatId][index-1].author !== 'Bot') {

                    const answerBot = setTimeout(()=> {
                        dispatch(addMessage(chatId, messageBot, "Bot")) },2500)
                    return()=>{
                        clearTimeout(answerBot)
                    }
                }
            }
        }
    }, [messagesList])

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
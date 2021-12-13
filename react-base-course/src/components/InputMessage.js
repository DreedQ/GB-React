import React from 'react';
import {useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

function InputMessage(props){

    // const chats = props.chats;
    // const setChats = props.setChats;
    // const chatId = props.chatId;
    const inputRef = useRef();

    const addMessage = (event)=>{
        event.preventDefault();
        let messageBuffer = props.chats;
        const item={
            id: nanoid(),
            text: event.target[0].value,
            author:'User',
        };
        if(event.target[0].value){
            messageBuffer[props.chatId].messages.push(item)
            props.setChats(props.chats)
        }
        event.target[0].value = ''
    }
    useEffect(()=>{
            const tempMessageList = props.chats;
            let index = tempMessageList[props.chatId].messages.length
            if(tempMessageList[props.chatId].messages[0]){
                if(tempMessageList[props.chatId].messages[index-1].author !== 'Bot') {
                    tempMessageList[props.chatId].messages.push({id: nanoid(), text:"Wow! You so smart.", author:"Bot",})
                    const answerBot = setTimeout(()=> {
                        props.setChats(tempMessageList)},1000)
                    return()=>{
                        clearTimeout(answerBot)
                    }
                }
            }
        }, [props.chats])

    useEffect(()=>{
        inputRef.current?.focus()
    }, [props.chats])

    return(
        <div>
            <form onSubmit={addMessage} className="form">
                <TextareaAutosize className="form_text" minRows={5} label="Text your message"  style={{ width: 300}} color="white" ref={inputRef}/>

                <Button className="form_btn" type="submit" variant="contained" endIcon="➢" mt={2}> Send
                </Button>
            </form>
        </div>
    )
}
export default InputMessage
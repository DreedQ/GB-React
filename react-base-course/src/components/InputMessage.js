import {useEffect, useRef} from "react";
import {nanoid} from "nanoid";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";

function InputMessage({chats, setChats, chatId}){
    const inputRef = useRef();

    const addMessage = (event)=>{
        event.preventDefault();
        let messageBuffer = chats;
        const item={
            id: nanoid(),
            text: event.target[0].value,
            author:'User',
        };
        if(event.target[0].value){
            messageBuffer[chatId].messages.push(item)
            // chatBuffer = [...chats];
            // chatBuffer[chatId].messages.push(item)
            // console.log(messageBuffer)
            setChats(chats)
        }
        event.target[0].value = ''
    }
    useEffect(()=>{
            const tempMessageList = chats;
            let index = tempMessageList[chatId].messages.length
            if(tempMessageList[chatId].messages[0]){
                if(tempMessageList[chatId].messages[index-1].author !== 'Bot') {
                    tempMessageList[chatId].messages.push({id: nanoid(), text:"Wow! You so smart.", author:"Bot",})
                    const answerBot = setTimeout(()=> {
                        setChats(tempMessageList)},1000)
                    return()=>{
                        clearTimeout(answerBot)
                    }
                }
            }
        }, [chats])

    useEffect(()=>{
        inputRef.current?.focus()
    }, [chats])

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
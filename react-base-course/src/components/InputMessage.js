import React, {useCallback, useEffect, useRef, useState} from 'react';
import Button from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
// import {addMessageWithThunk} from "../store/messages/messageActions";
import TextField from '@mui/material/TextField';
import {getProfileName} from "../store/profile/selectors";
// import {getMessagesList} from "../store/messages/selectors";
// import {getChats} from "../store/chats/selectors";
// import {dataBase} from "../services/firebase";
// import { ref, onValue, child, set} from "firebase/database";
import {nanoid} from "nanoid";
// import {child, ref, set} from "firebase/database";
// import {dataBase} from "../services/firebase";

function InputMessage({onAddMessage}){
    const profileName = useSelector(getProfileName);
    // const dispatch = useDispatch();
    // const chats = useSelector(getChats)

    const [message, setMessage] = useState({})

    const onSubmitMessage = (e)=>{
        e.preventDefault();
        // console.log(e)
        onAddMessage(message)
        e.target[0].value = '';
        setMessage("")
    }

   const  handleChange = useCallback(
       (e)=> {
           e.preventDefault();
           setMessage(e.target.value)
},[message])

    const inputRef = useRef();

    // useEffect(()=>{
    //     inputRef.current?.focus()
    // }, [messagesList])

    return(
        <div>
            <form onSubmit={onSubmitMessage} >
                <TextField fullWidth ref={inputRef} onChange={handleChange}  />
                <Button className="form_btn"  variant="contained" type='submit' endIcon="➢" mt={2}> Send message
                </Button>
            </form>

        </div>
    )
}
export default InputMessage
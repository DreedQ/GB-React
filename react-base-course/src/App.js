import './App.css';
import {useState, useEffect, useRef} from "react";
import { nanoid } from 'nanoid';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AppBar from '@mui/material/AppBar';
import Switch from '@mui/material/Switch';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { createTheme, ThemeProvider, } from '@mui/material/styles';

function App() {
    const [messageList, setMessageList] = useState([]);
    const [chatList, setChatList] = useState([]);
    const inputRef = useRef();

   const addMessage = (event)=>{
       event.preventDefault();
        const messageBuffer = [...messageList];
        const item={
            id: nanoid(),
          text: event.target[0].value,
          author:'user',
       };
    //    console.log(item)
       if(event.target[0].value){
           messageBuffer.push(item)
           setMessageList(messageBuffer)
       }
       event.target[0].value = ''
       console.log(messageList)
    }

    useEffect(()=>{
        const tempMessageList = [...messageList];
        let index = tempMessageList.length
        if(tempMessageList[0]){ 
            if(tempMessageList[index-1].author !== 'Bot') {
                tempMessageList.push({id: nanoid(), text:"Wow! You so smart.", author:"Bot",})
            }
        } 
        const answerBot = setTimeout(()=> {
            setMessageList(tempMessageList)},1000)
        return()=>{
            clearTimeout(answerBot)
        }
    }, [messageList])

    useEffect(()=>{
        inputRef.current?.focus()
    }, [messageList])

    const theme = createTheme({
        palette: {
            primary: {
                light: '#4fb3bf',
                main: '#00838f',
                dark: '#005662',
                contrastText: '#fff',
              },
            secondary: {
                light: '#ff7961',
                main: '#f44336',
                dark: '#ba000d',
                contrastText: '#000',            
            },
          },
      
      });

    return (
        <ThemeProvider theme={theme}>

        <div className="App">

             <Grid container spacing={1}>
             <AppBar position="static" color="primary" sx={{
                    display: 'flex',
                    p: 3,
                    m: 1,
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                    }}>
                 <span>Messanger</span>
            </AppBar>
             <Grid xs={4} item className="box">
                 <Box  >
                 <List>
                    {chatList.map(item => <ListItem>{item.name}</ListItem>)}
                </List>
                 </Box>
             <Box >
                 <form onSubmit={addMessage} className="form">
                <TextareaAutosize className="form_text" minRows={5} label="Text your message"  style={{ width: 300}} color="white" ref={inputRef}/>

                <Button className="form_btn" type="submit" variant="contained" endIcon="➢" mt={2}>
              Send
             </Button>
            </form>
                 </Box>
            </Grid>
             <Grid item xs={8}>
             <div className="messages">{messageList.map(item => <div className="messages_each" key={item.id}><b>{item.author}</b> : {item.text}</div>)}</div >
             </Grid>
             </Grid>
        </div>
        </ThemeProvider>
    );
}

export default App;
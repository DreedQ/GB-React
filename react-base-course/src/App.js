import './App.css';
import {useState, useEffect} from "react";

function App() {
    const [messageList, setMessageList] = useState([])

   const addMessage = (event)=>{
       event.preventDefault();
        const messageBuffer = [...messageList];
        const item={
            id: messageBuffer.length,
          text: event.target[0].value,
          author:'user',
       };
       if(event.target[0].value){
           messageBuffer.push(item)
           setMessageList(messageBuffer)
       }
       event.target[0].value = ''
    }

    useEffect(()=>{
        const tempMessageList = [...messageList];
        let index = tempMessageList.length
        if(tempMessageList[0]){ 
            if(tempMessageList[index-1].author !== 'Bot') {
                tempMessageList.push({id: tempMessageList.length, text:"Wow! You so smart.", author:"Bot",})
            }
        } 
        const answerBot = setTimeout(()=> {
            setMessageList(tempMessageList)},1000)
        return()=>{
            clearTimeout(answerBot)
        }
    }, [messageList])

    return (
        <div className="App">
            <form onSubmit={addMessage} className="form">
                <textarea />
                <p><input  type="submit"/></p>
            </form>
            <div className="messages">{messageList.map(item => <div className="messages_each">{messageList.indexOf(item)+1}) <b>{item.author}</b> : {item.text}</div>)}</div >
        </div>
    );
}

export default App;
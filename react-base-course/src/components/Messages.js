import InputMessage from "./InputMessage";

function Messages({messages}) {
// console.log(messages)
    return (
        <>
            {/*<div className="messages">{props.messages.map(item => <div className="messages_each" key={item.id}><b>{item.author}</b> : {item.text}</div>)}</div >*/}
           <ul className="messages">
               {messages.map(el=><li className="messages_each" key={el.id}>{el.author}: {el.text}</li>)}
           </ul>
        </>

    )
}

export default Messages;
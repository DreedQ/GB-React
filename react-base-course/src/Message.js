import "./Message.css"
function Message(props) {
    return ( 
        <div >
            <h3 className="message-text">{props.message}!!</h3>
        </div>
    )
}

export default Message;
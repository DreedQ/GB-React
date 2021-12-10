
import {Link} from "react-router-dom";
import {List,ListItem} from "@mui/material";
import Button from "@mui/material/Button";



const ChatList = ({ chats, setChats,chatId }) => {

        function addChat(event) {
            event.preventDefault();
            let chatsBuffer = chats;
            if(event.target[0].value){
              chatsBuffer[event.target[0].value] = {name:[event.target[0].value], messages:[{text:'Greetings, this is new chat!', author: 'Bot'}]};
             setChats(chatsBuffer)
            }
            event.target[0].value = '';
        }

        return (
            <>
                <List>
                    {Object.keys(chats).map((id, i) => (
                        <ListItem key={i}>
                            <Link to={`/chats/${id}`}>
                                <b style={{ color: id === chatId ? "#000000" : "grey" }}>
                                    {chats[id].name}
                                </b>
                            </Link>
                        </ListItem>
                    ))}
                </List>
                <form onSubmit={addChat} className="chat_list_form">
                    <input type="text" className="form_text"/>
                    <Button className="form_btn" type="submit" variant="contained" endIcon="➢" mt={2}> Add Chat
                    </Button>
                </form>
            </>
        )
    }
;

    // return(
    //     <div className="chat_list messages">
    //             <span>Chat list</span>
    //             <List>
    //                 {props.match.chats.map(item => <ListItem key={item.id}>{item.name}
    //                 </ListItem>)}
    //             </List>
                {/*<form onSubmit={addChat} className="chat_list_form">*/}
                {/*    <input type="text" className="form_text"/>*/}
                {/*    <Button className="form_btn" type="submit" variant="contained" endIcon="➢" mt={2}> Add Chat*/}
                {/*    </Button>*/}
                {/*</form>*/}
        // </div>

    // )
// }
export  default ChatList
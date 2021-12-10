import { Route, Switch, Link} from "react-router-dom";
import Profile from "../components/Profile";
import Home from "./pages/Home";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Chats from "./pages/Chats";
import {NoChat} from "./pages/NoChat";
import {useState} from "react";
import {initialChats} from "./pages/Chats";

export default function Routes() {
    const [chats, setChats] = useState(initialChats);
    // console.log(chats)
    return (
            <Grid container spacing={1} className='container'>
                <AppBar className='header' position="static" color="primary" sx={{
                    display: 'flex',
                    p: 3,
                    m: 1,
                    height: 50,
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'row'
                }}>
                    <span>Messenger</span>
                    <nav className="nav">
                        <ul >
                            <li>
                                <Link to="/profile">My Profile</Link>
                            </li>
                            <li>
                                <Link to="/chats">Chats</Link>
                            </li>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                        </ul>
                    </nav>

                </AppBar>

                <Switch>
                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/no_chat">
                        <NoChat chats={chats} />
                    </Route>

                    <Route
                        path="/chats/:chatId?"
                    >
                        <Chats chats={chats} setChats={setChats} />
                    </Route>


                    <Route exact path="/">
                        <Home />
                    </Route>

                    <Route>
                        <h3>Page not found</h3>
                    </Route>
                </Switch>
            </Grid>
    );
}
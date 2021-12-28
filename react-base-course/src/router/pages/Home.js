import React from 'react';
import {Link} from "react-router-dom";
import {List, ListItem} from "@mui/material";

const Home = () => {

    return(
        <>
            <h3>Home</h3>
            <nav className="nav">
                <List >
                    <ListItem>
                        <Link to="/login">Sign In</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/signup">Sign Up</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/profile">My Profile</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/chats">Chats</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                </List>
            </nav>
        </>

    )
}
export default Home;
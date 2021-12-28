import React, {useEffect, useState} from 'react';
import {Switch, Link} from "react-router-dom";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import Grid from "@mui/material/Grid";
import AppBar from "@mui/material/AppBar";
import Chats from "./pages/Chats";
import {Signup} from "../components/Signup";
import {GistsList} from "../components/GistsList";
import {Login} from "../components/Login";
import PublicRoute from "../hooks/PublicRoute";
import PrivateRoute from "../hooks/PrivateRoute";
import {Myapp} from "../services/firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import {NoChat} from "./pages/NoChat";

export default function Routes() {
    const [authed, setAuthed] = useState(false);

    useEffect(() => {
        // firebase.auth().onAuthStateChanged((user) => {
        const auth = getAuth(Myapp);
        onAuthStateChanged(auth, user => {
            if (user) {
                setAuthed(true);
            } else {
                setAuthed(false);
            }
        })
    }, []);

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
                            <li>
                                <Link to="/gists">Gists</Link>
                            </li>
                            <li>
                                <Link to="/signup">Registration</Link>
                            </li>
                            <li>
                                <Link to="/login">Login</Link>
                            </li>

                        </ul>
                    </nav>

                </AppBar>

                <Switch>
                    <PublicRoute authenticated={authed} exact path="/">
                        <Home />
                    </PublicRoute>
                    <PublicRoute authenticated={authed} path="/login">
                        <Login />
                    </PublicRoute>
                    <PublicRoute authenticated={authed} path="/signup">
                        <Signup />
                    </PublicRoute>
                    <PrivateRoute authenticated={authed} path="/chats/:chatId?">
                        <Chats />
                    </PrivateRoute>
                    <PrivateRoute authenticated={authed} path="/profile">
                        <Profile />
                    </PrivateRoute>
                    <PrivateRoute authenticated={authed} path="/no_chat">
                        <NoChat />
                    </PrivateRoute>
                    <PublicRoute authenticated={authed} path="/gists">
                        <GistsList />
                    </PublicRoute>
                </Switch>
            </Grid>
    );
}
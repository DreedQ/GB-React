import React from 'react';
import {Link} from "react-router-dom";

const Home = () => {
    return(
        <>
            <h3>Home</h3>
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
        </>

    )
}
export default Home;
import React, {useState} from "react";
import {Box, Switch} from "@mui/material";
import { useCallback } from "react";
import {toggleShowName}  from "../../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";

const Profile = ()=>{
    const { showName, name } = useSelector((state) => state);
    const dispatch = useDispatch();

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);



    return(
        <div>
            <h4>Profile</h4>
            <Switch  checked={showName}
                     value={showName}
                     onChange={setShowName}/>
            <span>Show Name</span>
            {showName && <div>{name}</div>}

        </div>
    )
}
export default Profile;
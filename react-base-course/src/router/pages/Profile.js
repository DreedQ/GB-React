import React, {useState} from "react";
import {Box, Switch} from "@mui/material";
import { useCallback } from "react";
import { changeName, toggleShowName} from "../../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";

const Profile = ()=>{
    const { showName, name } = useSelector((state) => state);

    const dispatch = useDispatch();

    const [value, setValue] = useState('');

    const setShowName = useCallback(() => {
        dispatch(toggleShowName);
    }, [dispatch]);

    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);

    const setName = useCallback(() => {
        dispatch(changeName(value))
    }, [dispatch, value]);

    return(
        <div>
            <Box>
                <h4>Profile</h4>
                <Switch  checked={showName}
                         value={showName}
                         onChange={setShowName}/>
                <span>Show Name</span>
                {showName && <div>{name}</div>}
                <div>
                    <input type="text" value={value} onChange={handleChange} />
                </div>
                <div>
                    <button onClick={setName}>Change Name</button>
                </div>

            </Box>
        </div>
    )
}
export default Profile;
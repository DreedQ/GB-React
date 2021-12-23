import React, {useCallback, useEffect} from 'react';
import {CircularProgress, List, ListItem} from "@mui/material";
import {useDispatch, useSelector} from "react-redux";
import {getAllGists} from "../store/gists/gistsActions";
import {selectGists, selectGistsError, selectGistsLoading} from "../store/gists/selectors";
export const API_URL_PUBLIC = "https://api.github.com/gists/public";

export const GistsList = () => {
    const dispatch = useDispatch();

    const gists = useSelector(selectGists);
    const error = useSelector(selectGistsError);
    const loading = useSelector(selectGistsLoading);

    const requestGists = () => {
        dispatch(getAllGists());
    };

    useEffect(() => {
        requestGists();
    }, []);

    const renderGist = useCallback(
        (gist) => <ListItem key={gist.id}>{gist.description}</ListItem>,
        []
    );
    console.log(gists);
    if (loading) {
        return <CircularProgress />;
    }

    if (error) {
        return (
            <>
                <h3>Error</h3>
                <button onClick={requestGists}>Retry</button>
            </>
        );
    }

    return <List>{gists.map(el=>renderGist(el))}</List>;
};

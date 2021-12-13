import {toggleShowName } from "./actions";

const initialState = {
    showName: false,
    name: 'Username'
}

const profileReducer = (state = initialState, action) => {
    switch (action) {
        case toggleShowName:
            return {
                ...state,
                showName: !state.showName
            }
        default:
            return state
    }
}

export default profileReducer;
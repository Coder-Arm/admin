import { createSlice } from "@reduxjs/toolkit";

const initialState = null;

const userSlice = createSlice({
    name : 'user',
    initialState,
    reducers : {
        manageUser : (state,action) => {
        return {
            id : action.payload.id,
            username : action.payload.username,
            password : action.payload.password
        }
        }
    }
})

export const {manageUser} = userSlice.actions;
export default userSlice.reducer;
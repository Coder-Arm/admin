import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    admin : [{  
      id : 1,
    username : 'admin',
    password : 'admin@123'
   }]};

const adminSlice = createSlice({
 name : 'admin',
 initialState,
 reducers : {
    addUsers : (state,action) => {
      state.admin.push({
         id : nanoid(),
         username : action.payload.username,
         password : action.payload.password 
        })
    },
    removeUsers : (state,action) => {
       state.admin = state.admin.filter((item) => item.id !== action.payload.id);
    }
 }
})

export const {addUsers,removeUsers} = adminSlice.actions;
export default adminSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const dataSlice = createSlice({
    name: "data",
    initialState: {
        username: '',
        role_id: null
    },
    reducers: {
        loginAction: (state,action) => {
            state.username = action.payload.username;
            state.role_id = action.payload.role_id;
        },

        logoutAction: (state, action) => {
            localStorage.removeItem("petshop_login");
            state.username='';
            state.role_id=null;  
        }
    }
});


export const {loginAction, logoutAction} = dataSlice.actions;
export default dataSlice.reducer;
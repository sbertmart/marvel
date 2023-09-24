import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    modal: false,
    admin: false,
};

export const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeLogin: (state, action) => {
            state.login = action.payload;
        },
        changeModal: (state, action) => {
            state.modal = action.payload;
        },
        changeAdmin: (state, action) => {
            state.admin = action.payload;
        }
      
    }
});

export const {changeLogin, changeModal, changeAdmin } = userSlice.actions;
export default userSlice.reducer;
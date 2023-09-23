import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    modal: false,
    member: false,
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
        changeMember: (state, action) => {
            state.member = action.payload;
        }
    }
});

export const {changeLogin, changeModal, changeMember} = userSlice.actions;
export default userSlice.reducer;
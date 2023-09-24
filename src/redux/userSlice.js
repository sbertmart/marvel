import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
    modal: false,
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
        }
      
    }
});

export const {changeLogin, changeModal} = userSlice.actions;
export default userSlice.reducer;
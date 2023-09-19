import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    login: false,
};

export const userSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        changeLogin: (state, action) => {
            state.login = action.payload;
    }
    }
});

export const {changeLogin} = userSlice.actions;
export default userSlice.reducer;
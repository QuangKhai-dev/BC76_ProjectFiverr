import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo")).user
    : null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    handleUpdateUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { handleUpdateUser } = userSlice.actions;

export default userSlice.reducer;

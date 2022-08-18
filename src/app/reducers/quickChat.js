import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./initialState";

const quickChat = createSlice({
  name: "quickChat",
  initialState,
  reducers: {
    updateProfile: (state, action) => {
      state.profile = action.payload;
    },
    selectUser: (state, action) => {
      state.selected = action.payload;
      const users = [...state.users];
      const user = users.find((u) => u.id == action.payload);
      user.pending = 0;
      state.users = users;
    },
    archiveUser: (state, action) => {
      const users = [...state.users];
      const user = users.find((u) => u.id == state.selected);
      user.archived = !user.archived;
      state.users = users;
    },
    updateChat: (state, action) => {
      const users = [...state.users];
      const user = users.find((u) => u.id == state.selected);
      user.chat = [...user.chat, action.payload];
      state.users = users;
    },
  },
});
export const { updateProfile, archiveUser, updateChat, selectUser } =
  quickChat.actions;
export default quickChat.reducer;

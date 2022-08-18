import { configureStore } from "@reduxjs/toolkit";
import quickChat from "./reducers/quickChat";

const store = configureStore({
  reducer: {
    quickChat,
  },
});

export default store;

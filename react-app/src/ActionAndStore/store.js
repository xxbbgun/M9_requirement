import { configureStore } from "@reduxjs/toolkit";
import socket from "./Address/reducer";
import news from "./News/reducer";
import user from "./user/reducer"
export default configureStore({
  reducer: {
    socket: socket,
    news: news,
    user: user
  },
});

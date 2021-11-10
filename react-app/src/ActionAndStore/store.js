import { configureStore } from "@reduxjs/toolkit";
import socket from "./Address/reducer";
import news from "./News/reducer";

export default configureStore({
  reducer: {
    socket: socket,
    news: news
  },
});

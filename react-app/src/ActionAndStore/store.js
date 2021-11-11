import { configureStore } from "@reduxjs/toolkit";
import socket from "./Address/reducer";
import news from "./News/reducer";
import customersReducers from "./Customer/reducer"
export default configureStore({
  reducer: {
    socket: socket,
    news: news,
    customer: customersReducers
  },
});

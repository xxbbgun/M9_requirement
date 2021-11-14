import { configureStore } from "@reduxjs/toolkit";
import socket from "./Socket/reducer";
import news from "./News/reducer";
import customersReducers from "./Customer/reducer";
import covid from "./Covid/reducer";
import weather from"./Weather/reducer";
import question from "./Question/reducer";
export default configureStore({
  reducer: {
    socket: socket,
    news: news,
    customer: customersReducers,
    covid:covid,
    weather:weather,
    question: question
  },
});

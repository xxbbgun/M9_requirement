import { configureStore } from '@reduxjs/toolkit';
import socket from "./Address/reducer"

export default configureStore({
    reducer: {
        socket:socket,
      }
});

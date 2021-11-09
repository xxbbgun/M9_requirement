import { createReducer } from "@reduxjs/toolkit";

import {setSocket} from "./action";


export default createReducer([], {
	[setSocket]: (state, action) => {
		return action.payload
	},
});

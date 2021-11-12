import { createReducer } from "@reduxjs/toolkit";

import {setSocket} from "./action";


export default createReducer(null, {
	[setSocket]: (state, action) => {
		return action.payload
	},
});

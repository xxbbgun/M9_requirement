import { createReducer } from "@reduxjs/toolkit";

import {
	fetchUser,
	setUser,
} from "./action";

export default createReducer([], {
	[fetchUser]: (state, action) => {
		return state
	},
	[setUser]: (state, action) => {
		return action.payload
	},
});

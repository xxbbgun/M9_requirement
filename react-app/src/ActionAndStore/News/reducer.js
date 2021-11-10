import { createReducer } from "@reduxjs/toolkit";

import { fetchNews } from "./action";

export default createReducer([], {
	[fetchNews]: (state, action) => {
		return action.payload
	},
});
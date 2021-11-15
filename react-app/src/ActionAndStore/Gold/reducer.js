import { createReducer } from "@reduxjs/toolkit";

import { fetchGold } from "./action";

export default createReducer([], {
	[fetchGold]: (state, action) => {
		return action.payload
	},
});
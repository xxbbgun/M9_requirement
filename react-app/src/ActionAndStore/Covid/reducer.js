import { createReducer } from "@reduxjs/toolkit";

import { fetchCovid } from "./action";

export default createReducer([], {
	[fetchCovid]: (state, action) => {
		return action.payload
	},
});
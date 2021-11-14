import { createReducer } from "@reduxjs/toolkit";

import { fetchQuestions } from "./action";

export default createReducer([], {
	[fetchQuestions]: (state, action) => {
		return action.payload
	},
});
import { createReducer } from "@reduxjs/toolkit";

import { fetchWeather } from "./action";

export default createReducer([], {
	[fetchWeather]: (state, action) => {
		return action.payload
	},
});
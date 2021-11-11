import { createReducer } from "@reduxjs/toolkit";

import {
	getCustomer,
	fetchCustomer,
	removeCustomer,
} from "./action";

export default createReducer([], {
	[getCustomer]: (state, action) => {
		return state
	},
	[fetchCustomer]: (state, action) => {
		return action.payload
	},
	[removeCustomer]: (state, action) =>{
		return state = {}
	}
});

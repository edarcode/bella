import { configureStore } from "@reduxjs/toolkit";
import { counter } from "./slices/counter/counter";

export const store = configureStore({
	reducer: {
		[counter.name]: counter.reducer
	}
});

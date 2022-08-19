import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
	name: "counter",
	initialState: { value: 0, step: 1 },
	reducers: {
		increment: counter => {
			counter.value += counter.step;
		},
		decrement: counter => {
			counter.value -= counter.step;
		}
	}
});

export const { increment, decrement } = counter.actions;

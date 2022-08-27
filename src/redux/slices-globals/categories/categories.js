import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	allCategories: [],
	loading: false,
	err: false
};

export const categories = createSlice({
	name: "categories",
	initialState,
	reducers: {
		setCategories: (categories, { payload }) => {
			categories.allCategories = payload;
			categories.loading = false;
			categories.err = false;
		},
		loadingCategories: categories => {
			categories.loading = true;
			categories.err = false;
		},
		setErrCategories: categories => {
			categories.loading = false;
			categories.err = ERR;
		}
	}
});

export const { setCategories, loadingCategories, setErrCategories } =
	categories.actions;

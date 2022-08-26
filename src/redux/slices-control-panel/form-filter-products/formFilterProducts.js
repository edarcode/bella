import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	name: "",
	active: null,
	order: null,
	productsPerPage: 6,
	minSalePrice: null,
	maxSalePrice: null,
	categoryId: null
};

export const formFilterProducts = createSlice({
	name: "formFilterProducts",
	initialState,
	reducers: {}
});

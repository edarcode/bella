import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	productsCount: 0,
	pageCount: 0,
	productsPerPage: 0,
	page: 0,
	products: [],
	loading: false,
	err: false
};

export const dataProducts = createSlice({
	name: "dataProducts",
	initialState,
	reducers: {
		setDataProducts: (_, { payload }) => {
			return { ...payload, loading: false, err: false };
		},
		loadingDataProducts: dataProducts => {
			dataProducts.loading = true;
		},
		errDataProducts: dataProducts => {
			dataProducts.loading = false;
			dataProducts.err = ERR;
		}
	}
});

export const { setDataProducts, loadingDataProducts, errDataProducts } =
	dataProducts.actions;

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
		setDataProducts: (dataProducts, { payload }) => {
			dataProducts.productsCount = payload.productsCount;
			dataProducts.pageCount = payload.pageCount;
			dataProducts.productsPerPage = payload.productsPerPage;
			dataProducts.page = payload.page;
			dataProducts.products = payload.products;
			dataProducts.loading = false;
			dataProducts.err = false;
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

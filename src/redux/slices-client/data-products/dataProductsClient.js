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

export const dataProductsClient = createSlice({
	name: "dataProductsClient",
	initialState,
	reducers: {
		setDataProducts: (_, { payload }) => {
			return { ...payload, loading: false, err: false };
		},
		loadingDataProducts: dataProducts => {
			dataProducts.loading = true;
			dataProducts.err = false;
		},
		errDataProducts: dataProducts => {
			dataProducts.loading = false;
			dataProducts.err = ERR;
		}
	}
});

export const { setDataProducts, loadingDataProducts, errDataProducts } =
	dataProductsClient.actions;

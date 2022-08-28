import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	productsCount: 0,
	pageCount: 0,
	productsPerPage: 0,
	page: 0,
	products: [],
	loading: false,
	err: false,
	filters: {
		name: "",
		active: null,
		order: null,
		productsPerPage: 6,
		minSalePrice: 0,
		maxSalePrice: 0,
		categoryId: null
	}
};

export const dataProducts = createSlice({
	name: "dataProducts",
	initialState,
	reducers: {
		setDataProducts: (dataProducts, { payload }) => {
			return { ...dataProducts, ...payload, loading: false, err: false };
		},
		loadingDataProducts: dataProducts => {
			dataProducts.loading = true;
		},
		errDataProducts: (dataProducts, { payload = ERR }) => {
			dataProducts.loading = false;
			dataProducts.err = payload;
			dataProducts.page = 0;
			dataProducts.pageCount = 0;
		},
		changePage: (dataProducts, { payload }) => {
			dataProducts.page = payload;
		},
		changeMinSalePrice: (dataProducts, { payload }) => {
			dataProducts.filters.minSalePrice = payload;
		},
		changeMaxSalePrice: (dataProducts, { payload }) => {
			dataProducts.filters.maxSalePrice = payload;
		}
	}
});

export const {
	setDataProducts,
	loadingDataProducts,
	errDataProducts,
	changePage,
	changeMinSalePrice,
	changeMaxSalePrice
} = dataProducts.actions;

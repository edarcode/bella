import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";
import { SORT_BY_OPTIONS } from "../../../constants/sortByOptions.js";

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
		order: SORT_BY_OPTIONS[0].asc,
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
			return {
				...dataProducts,
				...payload,
				loading: false,
				err: false
			};
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
			dataProducts.page = 0;
		},
		changeMaxSalePrice: (dataProducts, { payload }) => {
			dataProducts.filters.maxSalePrice = payload;
			dataProducts.page = 0;
		},
		changeName: (dataProducts, { payload }) => {
			dataProducts.filters.name = payload;
			dataProducts.page = 0;
		},
		changeOrder: (dataProducts, { payload }) => {
			dataProducts.filters.order = payload;
			dataProducts.page = 0;
		}
	}
});

export const {
	setDataProducts,
	loadingDataProducts,
	errDataProducts,
	changePage,
	changeMinSalePrice,
	changeMaxSalePrice,
	changeName,
	changeOrder
} = dataProducts.actions;

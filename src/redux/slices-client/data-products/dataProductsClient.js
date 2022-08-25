import { createSlice } from "@reduxjs/toolkit";

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
		setDataProducts: (dataProducts, action) => {
			if (!action.payload) return { ...dataProducts, err: "Ocurrió un error" };

			const { productsCount, pageCount, productsPerPage, page, products } =
				action.payload;

			dataProducts.productsCount = productsCount;
			dataProducts.pageCount = pageCount;
			dataProducts.productsPerPage = productsPerPage;
			dataProducts.page = page;
			dataProducts.products = products;
			dataProducts.loading = false;
			dataProducts.err = false;
		},
		loadingDataProducts: dataProducts => {
			dataProducts.loading = true;
		}
	}
});

export const { setDataProducts, loadingDataProducts } =
	dataProductsClient.actions;

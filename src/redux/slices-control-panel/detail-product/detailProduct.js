import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	id: null,
	active: null,
	stock: null,
	name: "",
	subName: "",
	buyPrice: null,
	salePrice: null,
	discount: null,
	description: "",
	createdAt: "",
	updatedAt: "",
	images: [],
	categories: [],
	suppliers: [],
	loading: false,
	err: ""
};

export const detailProduct = createSlice({
	name: "detailProduct",
	initialState,
	reducers: {
		saveDetailProduct: (_, { payload }) => {
			return { ...payload, loading: false, err: "" };
		},
		loadingDetailProduct: detailProduct => {
			detailProduct.loading = true;
			detailProduct.err = "";
		},
		errDetailProduct: (detailProduct, { payload }) => {
			detailProduct.loading = false;
			detailProduct.err = payload || ERR;
		}
	}
});

export const { saveDetailProduct, loadingDetailProduct, errDetailProduct } =
	detailProduct.actions;

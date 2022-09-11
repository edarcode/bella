import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";
import { SORT_BY_OPTIONS } from "../../../constants/sortByOptions.js";
import { STATUS_OPTIONS } from "../../../constants/statusOptions.js";

const initialState = {
	suppliersCount: null,
	pageCount: null,
	suppliersPerPage: null,
	page: 0,
	suppliers: [],
	loading: false,
	err: "",
	filters: {
		name: "",
		active: STATUS_OPTIONS[0].value,
		order: SORT_BY_OPTIONS[0].asc,
		suppliersPerPage: 6,
		tell: "",
		email: "",
		productId: ""
	}
};

export const dataSuppliers = createSlice({
	name: "dataSuppliers",
	initialState,
	reducers: {
		saveDataSuppliers: (dataSuppliers, { payload }) => {
			return {
				...dataSuppliers,
				...payload,
				loading: false,
				err: false
			};
		},
		loadingDataSuppliers: dataSuppliers => {
			dataSuppliers.loading = true;
		},
		errDataSuppliers: (dataSuppliers, { payload = ERR }) => {
			dataSuppliers.loading = false;
			dataSuppliers.err = payload;
			dataSuppliers.page = 0;
			dataSuppliers.pageCount = 0;
		},
		savePage: (dataSuppliers, { payload }) => {
			if (payload >= 0 && payload < dataSuppliers.pageCount)
				dataSuppliers.page = payload;
		},
		saveName: (dataSuppliers, { payload }) => {
			dataSuppliers.filters.name = payload;
			dataSuppliers.page = 0;
		},
		saveOrder: (dataSuppliers, { payload }) => {
			dataSuppliers.filters.order = payload;
			dataSuppliers.page = 0;
		},
		saveActive: (dataSuppliers, { payload }) => {
			dataSuppliers.filters.active = payload;
			dataSuppliers.page = 0;
		},
		saveProductId: (dataSuppliers, { payload }) => {
			dataSuppliers.filters.categoryId = payload;
			dataSuppliers.page = 0;
		}
	}
});

export const {
	saveDataSuppliers,
	loadingDataSuppliers,
	errDataSuppliers,
	savePage,
	saveName,
	saveOrder,
	saveActive,
	saveProductId
} = dataSuppliers.actions;

import { SAVE_BUY_PRICE, SAVE_SALE_PRICE, SAVE_STOCK } from "./actions.js";

export const initialCreateProduct = {
	stock: { value: "", err: "" },
	buyPrice: { value: "", err: "" },
	salePrice: { value: "", err: "" },
	images: [],
	categories: [],
	suppliers: [],
	err: "",
	loading: false,
	success: ""
};

export const createProduct = (createProduct, { type, payload }) => {
	switch (type) {
		case SAVE_STOCK:
			return {
				...createProduct,
				stock: { value: Number(payload) || "", err: "" }
			};
		case SAVE_BUY_PRICE:
			return {
				...createProduct,
				buyPrice: { value: Number(payload) || "", err: "" }
			};
		case SAVE_SALE_PRICE:
			return {
				...createProduct,
				salePrice: { value: Number(payload) || "", err: "" }
			};

		default:
			throw TypeError("Action err");
	}
};

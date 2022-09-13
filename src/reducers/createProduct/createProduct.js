import {
	SAVE_BUY_PRICE,
	SAVE_DESCRIPTION,
	SAVE_NAME,
	SAVE_SALE_PRICE,
	SAVE_STOCK,
	SAVE_SUBNAME
} from "./actions.js";

export const initialCreateProduct = {
	name: { value: "", err: "" },
	subName: { value: "", err: "" },
	stock: { value: "", err: "" },
	buyPrice: { value: "", err: "" },
	salePrice: { value: "", err: "" },
	description: { value: "", err: "" },
	images: [],
	categories: [],
	suppliers: [],
	err: "",
	loading: false,
	success: ""
};

export const createProduct = (createProduct, { type, payload }) => {
	switch (type) {
		case SAVE_NAME:
			return {
				...createProduct,
				name: { value: payload, err: "" }
			};
		case SAVE_SUBNAME:
			return {
				...createProduct,
				subName: { value: payload, err: "" }
			};
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
		case SAVE_DESCRIPTION:
			return {
				...createProduct,
				description: { value: payload, err: "" }
			};

		default:
			throw TypeError("Action err");
	}
};

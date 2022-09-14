import { ERR, SUCCESS } from "../../constants/msgs.js";
import { validatePrice } from "../../utils/validations/validatePrice.js";
import { validateStock } from "../../utils/validations/validateStock.js";
import {
	CLEAR_SUCCESS_AND_ERR,
	CREATE_PRODUCT,
	ERR_CREATE_PRODUCT,
	ERR_IMAGES,
	LOADING_CREATE_PRODUCT,
	LOADING_IMAGES,
	SAVE_BUY_PRICE,
	SAVE_CATEGORIES,
	SAVE_DESCRIPTION,
	SAVE_IMAGES,
	SAVE_NAME,
	SAVE_SALE_PRICE,
	SAVE_STOCK,
	SAVE_SUBNAME,
	SAVE_SUPPLIERS
} from "./actions.js";

export const initialCreateProduct = {
	name: { value: "", err: "" },
	subName: { value: "", err: "" },
	stock: { value: "", err: "" },
	buyPrice: { value: "", err: "" },
	salePrice: { value: "", err: "" },
	description: { value: "", err: "" },
	images: { value: [], err: "", loading: false, success: false },
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
				stock: { value: Number(payload) || "", err: validateStock(payload) }
			};
		case SAVE_BUY_PRICE:
			return {
				...createProduct,
				buyPrice: { value: Number(payload) || "", err: validatePrice(payload) }
			};
		case SAVE_SALE_PRICE:
			return {
				...createProduct,
				salePrice: { value: Number(payload) || "", err: validatePrice(payload) }
			};
		case SAVE_DESCRIPTION:
			return {
				...createProduct,
				description: { value: payload, err: "" }
			};
		case SAVE_IMAGES:
			return {
				...createProduct,
				images: { value: payload, err: "", loading: false, success: true }
			};
		case LOADING_IMAGES:
			return {
				...createProduct,
				images: { value: [], err: "", loading: true, success: false }
			};
		case ERR_IMAGES:
			return {
				...createProduct,
				images: {
					value: [],
					err: payload || ERR,
					loading: false,
					success: false
				}
			};
		case SAVE_CATEGORIES: {
			const setCategories = new Set(createProduct.categories);
			const categoryId = Number(payload);
			if (!setCategories.has(categoryId)) setCategories.add(categoryId);
			else setCategories.delete(categoryId);

			return {
				...createProduct,
				categories: [...setCategories]
			};
		}
		case SAVE_SUPPLIERS: {
			const setSuppliers = new Set(createProduct.suppliers);
			const supplierId = Number(payload);
			if (!setSuppliers.has(supplierId)) setSuppliers.add(supplierId);
			else setSuppliers.delete(supplierId);

			return {
				...createProduct,
				suppliers: [...setSuppliers]
			};
		}
		case CREATE_PRODUCT:
			return {
				...initialCreateProduct,
				err: "",
				loading: false,
				success: payload || SUCCESS
			};
		case LOADING_CREATE_PRODUCT:
			return {
				...createProduct,
				err: "",
				loading: true,
				success: ""
			};
		case ERR_CREATE_PRODUCT:
			return {
				...createProduct,
				err: payload || ERR,
				loading: false,
				success: ""
			};
		case CLEAR_SUCCESS_AND_ERR:
			return {
				...createProduct,
				err: "",
				loading: false,
				success: ""
			};
		default:
			throw TypeError("Action err");
	}
};

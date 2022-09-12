import { useReducer } from "react";
import {
	SAVE_BUY_PRICE,
	SAVE_SALE_PRICE,
	SAVE_STOCK
} from "../reducers/createProduct/actions.js";
import {
	createProduct,
	initialCreateProduct
} from "../reducers/createProduct/createProduct.js";

export const useCreateProduct = () => {
	const [dataFormCreateProduct, dispatch] = useReducer(
		createProduct,
		initialCreateProduct
	);

	const saveStock = stock => {
		dispatch({ type: SAVE_STOCK, payload: stock });
	};
	const saveBuyPrice = buyPrice => {
		dispatch({ type: SAVE_BUY_PRICE, payload: buyPrice });
	};
	const saveSalePrice = salePrice => {
		dispatch({ type: SAVE_SALE_PRICE, payload: salePrice });
	};

	return {
		...dataFormCreateProduct,
		saveStock,
		saveBuyPrice,
		saveSalePrice
	};
};

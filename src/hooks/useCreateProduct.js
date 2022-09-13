import { useReducer } from "react";
import {
	SAVE_BUY_PRICE,
	SAVE_CATEGORIES,
	SAVE_DESCRIPTION,
	SAVE_NAME,
	SAVE_SALE_PRICE,
	SAVE_STOCK,
	SAVE_SUBNAME
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

	const saveName = name => {
		dispatch({ type: SAVE_NAME, payload: name });
	};
	const saveSubName = subName => {
		dispatch({ type: SAVE_SUBNAME, payload: subName });
	};
	const saveStock = stock => {
		dispatch({ type: SAVE_STOCK, payload: stock });
	};
	const saveBuyPrice = buyPrice => {
		dispatch({ type: SAVE_BUY_PRICE, payload: buyPrice });
	};
	const saveSalePrice = salePrice => {
		dispatch({ type: SAVE_SALE_PRICE, payload: salePrice });
	};
	const saveDescription = description => {
		dispatch({ type: SAVE_DESCRIPTION, payload: description });
	};
	const saveCategories = description => {
		dispatch({ type: SAVE_CATEGORIES, payload: description });
	};

	return {
		...dataFormCreateProduct,
		saveName,
		saveSubName,
		saveStock,
		saveBuyPrice,
		saveSalePrice,
		saveDescription,
		saveCategories
	};
};

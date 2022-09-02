import { fetchDataProducts } from "../../../../utils/fetchs-client/fetchDataProducts.js";
import {
	errDataProducts,
	loadingDataProducts,
	setDataProducts
} from "../dataProductsClient.js";

export const getDataProducts = (signal, filters) => {
	return async dispatch => {
		try {
			dispatch(loadingDataProducts());
			const { data } = await fetchDataProducts(signal, filters);
			dispatch(setDataProducts(data));
		} catch (error) {
			dispatch(errDataProducts());
		}
	};
};

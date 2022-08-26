import { fetchDataProducts } from "../../../../utils/fetch-control-panel/fetchDataProducts.js";
import {
	errDataProducts,
	loadingDataProducts,
	setDataProducts
} from "../dataProducts.js";

export const getDataProducts = signal => {
	return async dispatch => {
		try {
			dispatch(loadingDataProducts());
			const { data } = await fetchDataProducts(signal);
			dispatch(setDataProducts(data));
		} catch (error) {
			dispatch(errDataProducts());
		}
	};
};

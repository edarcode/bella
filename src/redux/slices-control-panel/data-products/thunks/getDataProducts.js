import { fetchDataProducts } from "../../../../utils/fetch-control-panel/fetchDataProducts.js";
import {
	errDataProducts,
	loadingDataProducts,
	setDataProducts
} from "../dataProducts.js";

export const getDataProducts = ({ signal, page = 0 }) => {
	return async dispatch => {
		try {
			dispatch(loadingDataProducts());
			const { data } = await fetchDataProducts(signal, { page });
			dispatch(setDataProducts(data));
		} catch (error) {
			if (error.code !== "ERR_CANCELED") dispatch(errDataProducts());
		}
	};
};

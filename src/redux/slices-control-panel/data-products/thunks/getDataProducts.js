import { fetchDataProducts } from "../../../../utils/fetch-control-panel/fetchDataProducts.js";
import {
	errDataProducts,
	loadingDataProducts,
	setDataProducts
} from "../dataProducts.js";

export const getDataProducts = (signal, filters, { token, isFirstRender }) => {
	return async dispatch => {
		try {
			isFirstRender && dispatch(loadingDataProducts());
			const { data } = await fetchDataProducts(signal, filters, { token });
			dispatch(setDataProducts(data));
		} catch (error) {
			const {
				response: { status }
			} = error;
			if (status === 404) return dispatch(errDataProducts(404));
			dispatch(errDataProducts());
		}
	};
};

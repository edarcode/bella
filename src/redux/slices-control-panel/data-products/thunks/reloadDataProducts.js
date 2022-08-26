import { fetchDataProducts } from "../../../../utils/fetch-control-panel/fetchDataProducts.js";
import { errDataProducts, setDataProducts } from "../dataProducts.js";

export const reloadDataProducts = ({ signal, page = 0 }) => {
	return async dispatch => {
		try {
			const { data } = await fetchDataProducts(signal, { page });
			dispatch(setDataProducts(data));
		} catch (error) {
			dispatch(errDataProducts());
		}
	};
};

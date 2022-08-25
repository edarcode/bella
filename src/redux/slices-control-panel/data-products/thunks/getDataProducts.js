import { fetchDataProducts } from "../../../../utils/fetch-control-panel/fetchDataProducts.js";
import { loadingDataProducts, setDataProducts } from "../dataProducts.js";

export const getDataProducts = () => {
	return async dispatch => {
		try {
			dispatch(loadingDataProducts());
			const res = await fetchDataProducts();
			dispatch(setDataProducts(res.data));
		} catch (error) {
			dispatch(setDataProducts(null));
		}
	};
};

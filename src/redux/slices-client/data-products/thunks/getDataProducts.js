import { fetchDataProducts } from "../../../../utils/fetchs-client/fetchDataProducts.js";
import { setDataProducts } from "../dataProducts.js";

export const getDataProducts = () => {
	return async dispatch => {
		try {
			const res = await fetchDataProducts();
			dispatch(setDataProducts(res.data));
		} catch (error) {
			dispatch(setDataProducts(null));
		}
	};
};

import { fetchDataProducts } from "../../../../utils/fetchs-client/fetchDataProducts.js";
import { loadingDataProducts, setDataProducts } from "../dataProductsClient.js";

export const getDataProducts = ({ signal }) => {
	return async dispatch => {
		try {
			dispatch(loadingDataProducts());
			const res = await fetchDataProducts(signal);
			dispatch(setDataProducts(res.data));
		} catch (error) {
			dispatch(setDataProducts(null));
		}
	};
};

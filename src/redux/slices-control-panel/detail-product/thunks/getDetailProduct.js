import { fetchDetailProduct } from "../../../../utils/fetch-control-panel/fetchDetailProduct.js";
import {
	errDetailProduct,
	loadingDetailProduct,
	saveDetailProduct
} from "../detailProduct.js";

export const getDetailProduct = id => {
	return async dispatch => {
		try {
			dispatch(loadingDetailProduct());
			const { data } = await fetchDetailProduct(null, id);
			dispatch(saveDetailProduct(data));
		} catch (error) {
			dispatch(errDetailProduct());
		}
	};
};

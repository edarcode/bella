import { fetchAllCategories } from "../../../../utils/fetchs/fetchAllCategories.js";
import {
	loadingCategories,
	setCategories,
	setErrCategories
} from "../categories.js";

export const getCategories = ({ signal }) => {
	return async dispatch => {
		try {
			dispatch(loadingCategories());
			const { data } = await fetchAllCategories(signal);
			dispatch(setCategories(data));
		} catch (error) {
			dispatch(setErrCategories());
		}
	};
};

import { ALL_CATEGORIES } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchAllCategories = async signal => {
	const res = await axios({
		method: "GET",
		url: ALL_CATEGORIES,
		signal
	});

	return res;
};

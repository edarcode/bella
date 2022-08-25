import { DATA_PRODUCTS_CLIENT } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataProducts = async signal => {
	const res = await axios({
		method: "GET",
		url: DATA_PRODUCTS_CLIENT,
		signal
	});

	return res;
};

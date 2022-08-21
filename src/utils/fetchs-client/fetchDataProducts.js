import { DATA_PRODUCTS_CLIENT } from "../../env/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataProducts = async () => {
	const res = await axios({
		method: "GET",
		url: DATA_PRODUCTS_CLIENT
	});

	return res;
};

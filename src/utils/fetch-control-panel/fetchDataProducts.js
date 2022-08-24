import { DATA_PRODUCTS } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataProducts = async () => {
	const res = await axios({
		method: "GET",
		url: DATA_PRODUCTS
	});

	return res;
};

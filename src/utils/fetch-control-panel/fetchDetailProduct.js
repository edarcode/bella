import { DETAIL_PRODUCT } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDetailProduct = async (signal, id) => {
	if (!id) throw TypeError("Require id");
	const res = await axios({
		method: "GET",
		url: `${DETAIL_PRODUCT}/${id}`,
		signal
	});

	return res;
};

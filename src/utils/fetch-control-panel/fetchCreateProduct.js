import { PRODUCTS } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchCreateProduct = async (signal, data, { token }) => {
	if (!data) throw TypeError("Require data");
	const res = await axios({
		method: "POST",
		url: PRODUCTS,
		data,
		headers: { token },
		signal
	});

	return res;
};

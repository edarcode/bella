import { LOGIN } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchToken = async (signal, credentials) => {
	const res = await axios({
		method: "POST",
		url: LOGIN,
		data: credentials,
		signal
	});

	return res;
};

import { REGISTER } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchRegister = async (signal, credentials) => {
	const res = await axios({
		method: "POST",
		url: REGISTER,
		data: credentials,
		signal
	});

	return res;
};

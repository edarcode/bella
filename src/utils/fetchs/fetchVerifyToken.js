import { TOKEN_VERIFY } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchVerifyToken = async (signal, { token }) => {
	const res = await axios({
		method: "POST",
		url: TOKEN_VERIFY,
		headers: { token },
		signal
	});

	return res;
};

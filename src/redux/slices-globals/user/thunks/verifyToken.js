import { fetchVerifyToken } from "../../../../utils/fetchs/fetchVerifyToken.js";
import { saveDataUser } from "../user.js";

export const verifyToken = (signal, { token }) => {
	return async dispatch => {
		try {
			const { data } = await fetchVerifyToken(signal, { token });
			dispatch(saveDataUser({ ...data, token }));
		} catch (error) {
			localStorage.removeItem("token");
		}
	};
};

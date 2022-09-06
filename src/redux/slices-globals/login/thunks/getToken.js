import { fetchToken } from "../../../../utils/fetchs/fetchToken.js";
import { saveErr, saveToken } from "../login.js";

export const getToken = credentials => {
	return async dispatch => {
		try {
			const {
				data: { token }
			} = await fetchToken(null, credentials);
			dispatch(saveToken(token));
		} catch (error) {
			const {
				response: { data }
			} = error;

			dispatch(saveErr(data?.msg));
		}
	};
};

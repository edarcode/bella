import { fetchToken } from "../../../../utils/fetchs/fetchToken.js";
import { saveDataUser } from "../../user/user.js";
import { clearLogin, loadingToken, saveErr } from "../login.js";

export const getToken = credentials => {
	return async dispatch => {
		try {
			dispatch(loadingToken());
			const { data } = await fetchToken(null, credentials);
			dispatch(clearLogin());
			dispatch(saveDataUser(data)); // la acción viene del slice de user
		} catch (error) {
			const {
				response: { data }
			} = error;
			dispatch(saveErr(data?.msg));
		}
	};
};

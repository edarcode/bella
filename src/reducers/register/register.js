import { validateEmail } from "../../utils/validations/validateEmail.js";
import { validatePassword } from "../../utils/validations/validatePassword.js";
import {
	FETCH_ERR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	REGISTER_USER,
	SAVE_EMAIL,
	SAVE_PASSWORD
} from "./actions.js";

export const initialRegister = {
	email: { value: "", err: "" },
	password: { value: "", err: "" },
	err: "",
	loading: false,
	success: ""
};

export const register = (register, { type, payload }) => {
	switch (type) {
		case SAVE_EMAIL:
			return {
				...register,
				email: { value: payload, err: validateEmail(payload) }
			};
		case SAVE_PASSWORD:
			return {
				...register,
				password: { value: payload, err: validatePassword(payload) }
			};
		case REGISTER_USER:
			return {
				...register,
				password: { value: payload, err: validatePassword(payload) }
			};
		case FETCH_ERR:
			return {
				...register,
				err: payload,
				loading: false,
				success: ""
			};
		case FETCH_LOADING:
			return {
				...register,
				err: "",
				loading: true,
				success: ""
			};
		case FETCH_SUCCESS:
			return {
				email: { value: "", err: "" },
				password: { value: "", err: "" },
				err: "",
				loading: false,
				success: payload
			};

		default:
			throw TypeError("Action err");
	}
};

import { validateEmail } from "../../utils/validations/validateEmail.js";
import { validatePassword } from "../../utils/validations/validatePassword.js";
import { SAVE_EMAIL, SAVE_PASSWORD } from "./actions.js";

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

		default:
			throw TypeError("Action err");
	}
};

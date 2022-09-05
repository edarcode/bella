import { REGEX } from "../../constants/regex.js";

export const validateEmail = email => {
	if (!REGEX.EMAIL.test(email)) return "Formato de email invalido";
	return "";
};

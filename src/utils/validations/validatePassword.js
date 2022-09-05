export const validatePassword = password => {
	if (password.length < 8 || password.length > 16)
		return "Entre 8 y 16 caracteres";
	if (!hasOneSpace(password)) return "Al menos 1 espacio";
	return "";
};

const hasOneSpace = str => {
	for (let i = 0; i < str.length; i++) {
		const character = str[i];
		if (character === " ") return true;
	}
	return false;
};

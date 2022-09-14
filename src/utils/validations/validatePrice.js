export const validatePrice = price => {
	const numberPrice = Number(price);
	if (!(numberPrice >= 0)) return "Debe ser un valor positivo";
	return "";
};

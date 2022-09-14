export const validateStock = stock => {
	const numberStock = Number(stock);
	if (!(numberStock >= 0)) return "Debe ser un valor positivo";
	return "";
};

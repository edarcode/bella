export const numberFormatPrice = number => {
	const numberFormated = new Intl.NumberFormat("es-ES", {
		style: "currency",
		currency: "COP"
	}).format(number);

	return numberFormated;
};

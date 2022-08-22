export const calcClassName = (css, { baseClassName, className }) => {
	let newClassName = "";
	if (baseClassName) {
		const splitBaseClassName = baseClassName.split(" ");
		for (let i = 0; i < splitBaseClassName.length; i++) {
			const element = splitBaseClassName[i];
			newClassName
				? (newClassName += (css[element] && ` ${css[element]}`) || "")
				: (newClassName += (css[element] && css[element]) || "");
		}
	}
	if (className)
		newClassName
			? (newClassName += ` ${className}`)
			: (newClassName = className);

	return newClassName;
};

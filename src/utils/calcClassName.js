export const calcClassName = (css, { baseClassName, className }) => {
	let newClassName = "";
	if (baseClassName) newClassName = css[baseClassName];
	if (className)
		newClassName
			? (newClassName += ` ${className}`)
			: (newClassName = className);

	return newClassName;
};

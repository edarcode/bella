export const calcClassName = (css, { baseClassName, className }) => {
	let newClassName = "";
	if (css[baseClassName] && baseClassName) newClassName = css[baseClassName];
	if (className)
		newClassName
			? (newClassName += ` ${className}`)
			: (newClassName = className);

	return newClassName;
};

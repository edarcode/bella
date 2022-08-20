export const calcClassName = (css, { baseClassName, className }) => {
	let newClassName = css[baseClassName];
	if (className) newClassName += ` ${className}`;

	return newClassName;
};

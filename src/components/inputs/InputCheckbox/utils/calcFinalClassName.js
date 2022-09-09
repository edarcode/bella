export const calcFinalClassName = ({ localClass, outerClass }) => {
	const errClass = ["undefained", "null"];
	const allClassName = [];
	if (localClass && !errClass.includes(localClass))
		allClassName.push(localClass);
	if (outerClass && !errClass.includes(outerClass))
		allClassName.push(outerClass);

	return allClassName.join(" ");
};

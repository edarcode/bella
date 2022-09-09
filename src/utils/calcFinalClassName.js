export const calcFinalClassName = ({ css, local, outer }) => {
	if (!css) throw TypeError("Require the module css");
	const invalidClassName = ["undefained", "null"];
	const allClassName = [];
	if (local) {
		local
			.split(" ")
			.filter(
				className => !invalidClassName.includes(className) && css[className]
			)
			.map(className => allClassName.push(css[className]));
	}
	if (outer && !invalidClassName.includes(outer)) allClassName.push(outer);

	return allClassName.join(" ");
};

import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function ActiveCircle({ isAvtive, className }) {
	if (isAvtive === undefined) return null;

	const finallyClassName = calcClassName(css, {
		baseClassName: "circle",
		className
	});

	return (
		<span
			className={finallyClassName}
			style={!isAvtive ? { backgroundColor: "var(--color-red)" } : {}}
		/>
	);
}

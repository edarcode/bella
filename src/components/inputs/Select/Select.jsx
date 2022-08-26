import { calcClassName } from "../../../utils/calcClassName.js";
import ArrowDown from "../../icons/ArrowDown.jsx";
import css from "./style.module.css";

export default function Select({ className, ...props }) {
	const finallyClassName = calcClassName(css, {
		baseClassName: "wrapper",
		className
	});
	return (
		<div className={finallyClassName}>
			<select {...props} className={css.select}></select>
			<ArrowDown className={css.arrow} />
		</div>
	);
}

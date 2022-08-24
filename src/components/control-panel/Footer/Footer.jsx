import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Footer({ className }) {
	const newClassName = calcClassName(css, {
		baseClassName: "footer",
		className
	});
	return (
		<footer className={newClassName}>
			Colombia / Cuentas claras y el chocolate espeso 🥸
		</footer>
	);
}

import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Footer({ className }) {
	const finallyClassName = calcClassName({
		css,
		local: "footer",
		outer: className
	});
	return (
		<footer className={finallyClassName}>
			Colombia / Cuentas claras y el chocolate espeso 🥸
		</footer>
	);
}

import { Link } from "react-router-dom";
import { calcClassName } from "../../../utils/calcClassName.js";
import Arrow from "../../icons/Arrow.jsx";
import css from "./style.module.css";

export default function ButtonLink({ className, children, ...props }) {
	const finallyClassName = calcClassName(css, {
		baseClassName: "span",
		className
	});

	return (
		<span className={finallyClassName}>
			<Link {...props} className={css.link}>
				{children}
			</Link>
			<Arrow className={css.arrow} />
		</span>
	);
}

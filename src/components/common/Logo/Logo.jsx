import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Logo({ className, color, ...props }) {
	const finallyClassName = calcClassName(css, {
		baseClassName: "logo",
		className
	});
	return (
		<img
			{...props}
			className={finallyClassName}
			src="/logo_bella.svg"
			alt="logo bella"
			style={(color === "white" && { filter: "invert(1)" }) || {}}
		/>
	);
}

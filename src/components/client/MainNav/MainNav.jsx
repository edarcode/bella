import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function MainNav({ className }) {
	const finallyClassName = calcClassName(css, {
		baseClassName: "mainNav oe",
		className
	});
	return <nav className={finallyClassName}></nav>;
}

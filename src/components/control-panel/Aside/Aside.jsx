import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Aside({ className }) {
	const newClassName = calcClassName(css, {
		baseClassName: "aside",
		className
	});
	return <aside className={newClassName}>aside</aside>;
}

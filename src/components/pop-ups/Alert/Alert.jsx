import { calcClassName } from "../../../utils/calcClassName.js";
import Button from "../../buttons/Button/Button.jsx";
import css from "./style.module.css";

export default function Alert({
	isVisible,
	text,
	textBtn,
	className,
	onClick,
	...props
}) {
	const finallyClassName = calcClassName(css, {
		baseClassName: "alert",
		className
	});

	if (!isVisible) return null;
	return (
		<article {...props} className={finallyClassName}>
			<p className={css.text}>{text}</p>
			<Button onClick={onClick}>{textBtn}</Button>
		</article>
	);
}

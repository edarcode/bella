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
	const finallyClassName = calcClassName({
		css,
		local: "alert",
		outer: className
	});

	if (!isVisible) return null;
	return (
		<dialog {...props} className={finallyClassName}>
			<p className={css.text}>{text}</p>
			<Button onClick={onClick}>{textBtn}</Button>
		</dialog>
	);
}

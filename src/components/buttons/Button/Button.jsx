import { KIND_BUTTON } from "../../../constants/kindButton.js";
import css from "./style.module.css";

export default function Button({
	disabled,
	className,
	kind,
	isNull,
	...props
}) {
	if (isNull) return null;
	return (
		<button
			{...props}
			disabled={disabled}
			className={`${css.btn} ${className} ${
				css[!disabled ? kind : KIND_BUTTON.gray]
			}`}
		/>
	);
}

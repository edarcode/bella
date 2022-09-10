import { KIND_BUTTON } from "../../../constants/kindButton.js";
import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Button({
	disabled,
	className,
	kind,
	isVisible,
	...props
}) {
	if (isVisible) return null;
	const cssModifier = disabled ? KIND_BUTTON.gray : kind;
	const finallyClassName = calcClassName({
		css,
		local: `btn ${cssModifier}`,
		outer: className
	});

	return <button {...props} disabled={disabled} className={finallyClassName} />;
}

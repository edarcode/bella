import { calcClassName } from "../../../utils/calcClassName.js";
import { numberFormatPrice } from "../../../utils/numberFormatPrice.js";
import css from "./style.module.css";

export default function InputRange({ value, text, className, ...props }) {
	const finallyClassName = calcClassName({
		css,
		local: "wrapper otraClase",
		outer: className
	});

	return (
		<div className={finallyClassName}>
			<span className={css.text}>{text}</span>
			<span className={css.price}>$ {numberFormatPrice(value)}</span>
			<input {...props} value={value} type="range" />
		</div>
	);
}

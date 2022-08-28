import { numberFormatPrice } from "../../../utils/numberFormatPrice.js";
import css from "./style.module.css";

export default function InputRange({ value, text, ...props }) {
	return (
		<div className={css.wrapper}>
			<span className={css.price}>
				{text} {numberFormatPrice(value)}
			</span>
			<input {...props} value={value} type="range" />
		</div>
	);
}

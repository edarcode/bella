import { numberFormatPrice } from "../../../utils/numberFormatPrice.js";
import css from "./style.module.css";

export default function InputRange({ value, ...props }) {
	return (
		<div className={css.wrapper}>
			<input value={value} {...props} type="range" />
			<span className={css.price}>{numberFormatPrice(value)}</span>
		</div>
	);
}

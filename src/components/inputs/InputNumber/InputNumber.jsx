import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function InputNumber({ err, className, ...props }) {
	const finallyClassNameLabel = calcClassName({
		css,
		local: "label",
		outer: className
	});
	const finallyClassNameInput = calcClassName({
		css,
		local: "input",
		outer: err ? css.inputErr : null
	});
	return (
		<label className={finallyClassNameLabel}>
			<input {...props} className={finallyClassNameInput} type="number" />
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function InputEmail({ err, className, ...props }) {
	const finallyClassNameLabel = calcClassName(css, {
		baseClassName: "label",
		className
	});
	const finallyClassNameInput = calcClassName(css, {
		baseClassName: "input",
		className: err ? css.inputErr : null
	});
	return (
		<label className={finallyClassNameLabel}>
			<div className={css.wrapper1}>
				<input {...props} className={finallyClassNameInput} type="email" />
			</div>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

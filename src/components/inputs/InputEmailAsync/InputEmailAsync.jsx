import { calcClassName } from "../../../utils/calcClassName.js";
import RenderIconAsyncForms from "../RenderIconAsyncForms/RenderIconAsyncForms.jsx";
import css from "./style.module.css";

export default function InputEmailAsync({
	err,
	loading,
	success,
	className,
	...props
}) {
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
				<RenderIconAsyncForms
					className={css.icon}
					err={err}
					loading={loading}
					success={success}
				/>
			</div>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

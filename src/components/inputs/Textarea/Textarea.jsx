import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function Textarea({ err, className, ...props }) {
	const finallyClassNameLabel = calcClassName({
		css,
		local: "label",
		outer: className
	});
	const finallyClassNameInput = calcClassName({
		css,
		local: "textarea",
		outer: err ? css.textareaErr : null
	});
	return (
		<label className={finallyClassNameLabel}>
			<textarea {...props} className={finallyClassNameInput} />
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

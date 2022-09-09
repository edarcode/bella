import css from "./style.module.css";
import Check from "./svgs/Check.jsx";
import { calcFinalClassName } from "./utils/calcFinalClassName.js";

export default function InputCheckbox({ className, text, ...props }) {
	const finallyClassName = calcFinalClassName({
		css,
		local: "label",
		outer: className
	});

	return (
		<label className={finallyClassName}>
			<input {...props} className={css.check} type="checkbox" />
			<span className={css.fakeCheck}>
				<Check className={css.svgCheck} />
			</span>
			<span>{text}</span>
		</label>
	);
}

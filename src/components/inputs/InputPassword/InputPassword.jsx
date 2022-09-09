import { useState } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import RenderIconEye from "./RenderIconEye/RenderIconEye.jsx";
import css from "./style.module.css";

export default function InputPassword({ err, className, ...props }) {
	const [isVisiblePass, setIsVisiblePass] = useState(true);
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
			<div className={css.wrapper1}>
				<input
					{...props}
					className={finallyClassNameInput}
					type={isVisiblePass ? "text" : "password"}
				/>
				<RenderIconEye
					className={css.eye}
					isOpenEye={isVisiblePass}
					onClick={() => setIsVisiblePass(!isVisiblePass)}
				/>
			</div>
			{err && <span className={css.err}>{err}</span>}
		</label>
	);
}

import { useRef } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import RenderIcon from "./RenderIcon.jsx";
import css from "./style.module.css";

export default function InputImages({
	innerRef,
	loading,
	err,
	success,
	className,
	...props
}) {
	const label = useRef(null);
	const finallyClassName = calcClassName({
		css,
		local: "label",
		outer: className
	});

	const handleFocus = e => {
		label.current.style.boxShadow = "var(--shadow-big)";
	};
	const handleBlur = e => {
		label.current.style.boxShadow = "none";
	};

	return (
		<label className={finallyClassName} ref={label}>
			<span>Imágenes</span>
			<RenderIcon loading={loading} err={err} success={success} />
			<input
				{...props}
				ref={innerRef}
				type="file"
				className={css.inputFile}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</label>
	);
}

import { useRef } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";
import Upload from "./svgs/Upload.jsx";

export default function InputFile({ className, ...props }) {
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
			<span>Cargar imgs</span>
			<Upload className={css.upload} />
			<input
				{...props}
				type="file"
				className={css.inputFile}
				onFocus={handleFocus}
				onBlur={handleBlur}
			/>
		</label>
	);
}

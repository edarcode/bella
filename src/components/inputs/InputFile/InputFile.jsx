import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";
import Upload from "./svgs/Upload.jsx";

export default function InputFile({ className, ...props }) {
	const finallyClassName = calcClassName({
		css,
		local: "label",
		outer: className
	});
	return (
		<label className={finallyClassName}>
			<span>Cargar imgs</span>
			<Upload className={css.upload} />
			<input {...props} type="file" className={css.inputFile} />
		</label>
	);
}

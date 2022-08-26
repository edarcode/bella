import Loupe from "../../icons/Loupe.jsx";
import css from "./style.module.css";

export default function InputSearch(props) {
	return (
		<label className={css.label}>
			<Loupe className={css.loupe} />
			<input {...props} className={css.input} type="text" />
		</label>
	);
}

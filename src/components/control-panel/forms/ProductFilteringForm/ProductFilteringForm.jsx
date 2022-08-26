import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";
import css from "./style.module.css";

export default function ProductFilteringForm() {
	return (
		<form className={css.form}>
			<InputSearch />
		</form>
	);
}

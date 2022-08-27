import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";
import SelectToFilterActiveProducts from "../../SelectToFilterActiveProducts/SelectToFilterActiveProducts.jsx";
import SelectToSortProducts from "../../SelectToSortProducts/SelectToSortProducts.jsx";
import css from "./style.module.css";

export default function FormFilterProducts() {
	return (
		<form className={css.form}>
			<InputSearch placeholder="Buscar..." />
			<SelectToFilterActiveProducts />
			<SelectToSortProducts />
		</form>
	);
}

import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";
import RangePriceProduct from "../RangePriceProduct/RangePriceProduct.jsx";
import SelectCategoryProduct from "../SelectCategoryProduct/SelectCategoryProduct.jsx";
import SelectSortProduct from "../SelectSortProduct/SelectSortProduct.jsx";
import SelectStateProduct from "../SelectStateProduct/SelectStateProduct.jsx";

import css from "./style.module.css";

export default function FormFilterProducts() {
	return (
		<form className={css.form}>
			<InputSearch placeholder="Buscar..." />
			<SelectSortProduct />
			<SelectStateProduct />
			<SelectCategoryProduct />
			<RangePriceProduct />
		</form>
	);
}

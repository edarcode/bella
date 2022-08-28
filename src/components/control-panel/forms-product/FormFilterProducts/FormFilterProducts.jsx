import InputSearchName from "../InputSearchName/InputSearchName.jsx";
import RangePriceProduct from "../RangePriceProduct/RangePriceProduct.jsx";
import SelectCategoryProduct from "../SelectCategoryProduct/SelectCategoryProduct.jsx";
import SelectSortProduct from "../SelectSortProduct/SelectSortProduct.jsx";
import SelectStateProduct from "../SelectStateProduct/SelectStateProduct.jsx";

import css from "./style.module.css";

export default function FormFilterProducts() {
	return (
		<form className={css.form}>
			<InputSearchName />
			<SelectSortProduct />
			<SelectStateProduct />
			<SelectCategoryProduct />
			<RangePriceProduct />
		</form>
	);
}

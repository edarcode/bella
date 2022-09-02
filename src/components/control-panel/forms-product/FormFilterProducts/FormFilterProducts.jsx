import Close from "../../../icons/Close.jsx";
import RangePriceProduct from "../RangePriceProduct/RangePriceProduct.jsx";
import SelectCategoryProduct from "../SelectCategoryProduct/SelectCategoryProduct.jsx";
import SelectSortProduct from "../SelectSortProduct/SelectSortProduct.jsx";
import SelectStateProduct from "../SelectStateProduct/SelectStateProduct.jsx";

import css from "./style.module.css";

export default function FormFilterProducts({ isCollapse, handleCollapse }) {
	if (!isCollapse) return null;
	return (
		<form className={css.form}>
			<Close className={css.close} onClick={handleCollapse} />
			<SelectSortProduct />
			<SelectStateProduct />
			<SelectCategoryProduct />
			<RangePriceProduct />
		</form>
	);
}

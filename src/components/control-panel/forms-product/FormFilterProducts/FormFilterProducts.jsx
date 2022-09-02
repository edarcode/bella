import { useState } from "react";
import Button from "../../../buttons/Button/Button.jsx";
import Close from "../../../icons/Close.jsx";
import InputSearchName from "../InputSearchName/InputSearchName.jsx";
import RangePriceProduct from "../RangePriceProduct/RangePriceProduct.jsx";
import SelectCategoryProduct from "../SelectCategoryProduct/SelectCategoryProduct.jsx";
import SelectSortProduct from "../SelectSortProduct/SelectSortProduct.jsx";
import SelectStateProduct from "../SelectStateProduct/SelectStateProduct.jsx";

import css from "./style.module.css";

export default function FormFilterProducts() {
	const [isCollapseFilters, setIsCollapseFilters] = useState(false);
	const handleClickIsCollapseFilters = () => {
		setIsCollapseFilters(!isCollapseFilters);
	};
	return (
		<form className={css.form}>
			<InputSearchName />
			{!isCollapseFilters && (
				<Button type="button" onClick={handleClickIsCollapseFilters}>
					Filtros
				</Button>
			)}
			{isCollapseFilters && (
				<div className={css.filters}>
					<Close className={css.close} onClick={handleClickIsCollapseFilters} />
					<SelectSortProduct />
					<div className={css.wrapper1}>
						<SelectStateProduct />
						<SelectCategoryProduct />
					</div>
					<RangePriceProduct />
				</div>
			)}
		</form>
	);
}

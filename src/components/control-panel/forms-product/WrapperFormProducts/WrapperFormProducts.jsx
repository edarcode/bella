import { useEffect, useState } from "react";
import { useGetCategories } from "../../../../hooks/useGetCategories.js";
import { useSizeWindow } from "../../../../hooks/useSizeWindow.js";
import { calcClassName } from "../../../../utils/calcClassName.js";
import Button from "../../../buttons/Button/Button.jsx";
import FormFilterProducts from "../FormFilterProducts/FormFilterProducts.jsx";
import css from "./style.module.css";

export default function WrapperFormProducts({ className }) {
	useGetCategories();
	const { widthWindow } = useSizeWindow();
	const [isCollapseFilters, setIsCollapseFilters] = useState(false);
	const handleClickIsCollapseFilters = () => {
		setIsCollapseFilters(!isCollapseFilters);
	};
	useEffect(() => {
		if (widthWindow >= 920) setIsCollapseFilters(true);
	}, [widthWindow]);

	const finallyClassName = calcClassName(css, {
		baseClassName: "wrapper",
		className
	});
	return (
		<div className={finallyClassName}>
			<Button
				className={css.btn}
				type="button"
				onClick={handleClickIsCollapseFilters}
				isNull={isCollapseFilters}
			>
				Filtros
			</Button>
			<FormFilterProducts
				isCollapse={isCollapseFilters}
				handleCollapse={handleClickIsCollapseFilters}
			/>
		</div>
	);
}

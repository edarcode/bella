import { useEffect, useState } from "react";
import { useSizeWindow } from "../../../../hooks/useSizeWindow.js";
import { calcClassName } from "../../../../utils/calcClassName.js";
import Button from "../../../buttons/Button/Button.jsx";
import FormFilterProducts from "../FormFilterProducts/FormFilterProducts.jsx";
import css from "./style.module.css";

export default function WrapperFormProducts({ className }) {
	const { widthWindow } = useSizeWindow();
	const [isCollapseFilters, setIsCollapseFilters] = useState(false);
	const handleClickIsCollapseFilters = () => {
		setIsCollapseFilters(!isCollapseFilters);
	};
	useEffect(() => {
		if (widthWindow >= 920) setIsCollapseFilters(true);
		else setIsCollapseFilters(false);
	}, [widthWindow]);

	const finallyClassName = calcClassName({
		css,
		local: "wrapper",
		outer: className
	});
	return (
		<div className={finallyClassName}>
			<Button
				className={css.btn}
				type="button"
				onClick={handleClickIsCollapseFilters}
				isVisible={isCollapseFilters}
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

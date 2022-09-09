import { calcClassName } from "../../../utils/calcClassName.js";
import ArrowDown from "../../icons/ArrowDown.jsx";
import css from "./style.module.css";

export default function Select({
	className,
	directionSort,
	onDirectionSort,
	...props
}) {
	const finallyClassName = calcClassName({
		css,
		local: "wrapper",
		outer: className
	});
	return (
		<div
			className={finallyClassName}
			style={(directionSort && { marginTop: "22px" }) || {}}
		>
			{directionSort && (
				<span className={css.directionSort} onClick={onDirectionSort}>
					{directionSort}
				</span>
			)}
			<select {...props} className={css.select}></select>
			<ArrowDown className={css.arrow} />
		</div>
	);
}

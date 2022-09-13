import { useState } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";
import Arrow from "./svgs/Arrow.jsx";
import WrapperAllChecks from "./WrapperAllChecks.jsx";

export default function SelectMultiple({
	about,
	dataChecks,
	className,
	value,
	onChange
}) {
	const [isCollapse, setIsCollapse] = useState(false);
	const finallyClassName = calcClassName({
		css,
		local: "select",
		outer: className
	});
	return (
		<div className={finallyClassName}>
			<button
				type="button"
				className={css.btn}
				onClick={() => setIsCollapse(!isCollapse)}
			>
				<span>{about}</span>
				<Arrow
					className={css.arrow}
					style={isCollapse ? { transform: "rotate(-90deg)" } : {}}
				/>
			</button>
			<WrapperAllChecks
				dataChecks={dataChecks}
				isCollapse={isCollapse}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}

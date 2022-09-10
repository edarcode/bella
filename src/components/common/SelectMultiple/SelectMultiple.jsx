import { useState } from "react";
import css from "./style.module.css";
import Arrow from "./svgs/Arrow.jsx";
import WrapperAllChecks from "./WrapperAllChecks.jsx";

export default function SelectMultipleOptions({ about, dataChecks }) {
	const [isCollapse, setIsCollapse] = useState(false);

	return (
		<div className={css.select}>
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
			<WrapperAllChecks dataChecks={dataChecks} isCollapse={isCollapse} />
		</div>
	);
}

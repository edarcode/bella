import { useState } from "react";
import css from "./style.module.css";
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
				{about}
			</button>
			<WrapperAllChecks dataChecks={dataChecks} isCollapse={isCollapse} />
		</div>
	);
}

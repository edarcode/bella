import css from "./style.module.css";
import { splitNameCheck } from "./utils/splitNameCheck.js";

export default function WrapperAllChecks({
	dataChecks,
	isCollapse,
	value,
	onChange
}) {
	if (!dataChecks || !isCollapse) return null;
	return (
		<div className={css.wrapperAllChecks}>
			{dataChecks.map(({ id, name }) => (
				<label key={id} className={css.wrapperCheck}>
					<input
						type="checkbox"
						value={id}
						checked={value.includes(id)}
						onChange={onChange}
					/>
					<span className={css.nameCheck}>{splitNameCheck(name)}</span>
				</label>
			))}
		</div>
	);
}

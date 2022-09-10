import css from "./style.module.css";

export default function WrapperAllChecks({ dataChecks, isCollapse }) {
	if (!dataChecks || !isCollapse) return null;
	return (
		<div className={css.wrapperAllChecks}>
			{dataChecks.map(({ id, name }) => (
				<label key={id} className={css.wrapperCheck}>
					<input type="checkbox" />
					<span>{name}</span>
				</label>
			))}
		</div>
	);
}

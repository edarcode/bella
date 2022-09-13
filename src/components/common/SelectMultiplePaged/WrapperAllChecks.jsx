import css from "./style.module.css";
import Arrow from "./svgs/Arrow.jsx";
import { splitNameCheck } from "./utils/splitNameCheck.js";

export default function WrapperAllChecks({
	dataChecks,
	isCollapse,
	page,
	onPage,
	pageCount,
	value,
	onChange
}) {
	const handleClickPageNext = () => {
		if (isDisableBtnArrowRight) return;
		onPage(page + 1);
	};
	const handleClickPageBack = () => {
		if (isDisableBtnArrowLeft) return;
		onPage(page - 1);
	};

	const isDisableBtnArrowLeft = page === 0;
	const isDisableBtnArrowRight = page === pageCount - 1;

	if (!dataChecks || !isCollapse) return null;
	return (
		<div className={css.wrapperAllChecks}>
			<button
				className={css.btnChecksLeft}
				onClick={handleClickPageBack}
				disabled={isDisableBtnArrowLeft}
			>
				<Arrow className={css.arrowLeft} />
			</button>
			<button
				className={css.btnChecksRight}
				onClick={handleClickPageNext}
				disabled={isDisableBtnArrowRight}
			>
				<Arrow className={css.arrowRight} />
			</button>
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

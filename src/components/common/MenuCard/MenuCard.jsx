import css from "./style.module.css";

export default function MenuCard({ icon, text, visibleText }) {
	const Icon = icon;
	return (
		<div className={css.card}>
			<Icon className={css.icon} />
			{visibleText && <span>{text}</span>}
		</div>
	);
}

import css from "./style.module.css";

export default function Spinner({ className, isVisible }) {
	if (!isVisible) return null;
	return (
		<div
			className={className ? `${css.spinner} ${className}` : css.spinner}
		></div>
	);
}

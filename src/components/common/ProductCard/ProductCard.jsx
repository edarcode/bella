import Arrow from "../../icons/Arrow.jsx";
import css from "./style.module.css";

export default function ProductCard({ name, subName, img }) {
	return (
		<article className={css.card}>
			<div className={css.wrapper1}>
				<div className={css.name}>{name}</div>
				<span className={css.subName}>{subName}</span>
				<a href="#" className={css.readMore}>
					<span>Más información</span> <Arrow />
				</a>
			</div>
			<img className={css.img} src={img} alt={name} />
		</article>
	);
}

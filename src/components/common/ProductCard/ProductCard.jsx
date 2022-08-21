import Arrow from "../../icons/Arrow.jsx";
import css from "./style.module.css";

export default function ProductCard({ name, subName, img }) {
	const { small, medium, big, original } = img;

	return (
		<article className={css.card}>
			<div className={css.wrapper1}>
				<div className={css.name}>{name}</div>
				<span className={css.subName}>{subName}</span>
				<a href="#" className={css.readMore}>
					<span>Más información</span> <Arrow />
				</a>
			</div>
			<picture className={css.picture}>
				<source srcSet={small} media="(max-width:768px)" />
				<source srcSet={medium} media="(max-width:1280px)" />
				<source srcSet={big} media="(max-width:1920px)" />

				<img src={original} alt={name} />
			</picture>
		</article>
	);
}

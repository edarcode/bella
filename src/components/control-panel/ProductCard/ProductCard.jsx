import { numberFormatPrice } from "../../../utils/numberFormatPrice.js";
import css from "./style.module.css";

export default function ProductCard({
	images,
	name,
	subName,
	stock,
	salePrice,
	discount
}) {
	return (
		<div className={css.card}>
			<img className={css.img} src={images[0].small} alt={name} />
			<div className={css.wrapper1}>
				<span className={css.name}>{name}</span>
				<span className={css.subName}>{subName}</span>
			</div>
			<span className={css.stock}>{stock} items</span>
			<span>{numberFormatPrice(salePrice)}</span>
			<span className={css.discount}>-{discount}%</span>
		</div>
	);
}

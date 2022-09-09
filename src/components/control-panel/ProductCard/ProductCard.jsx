import { Link } from "react-router-dom";
import { EDIT_PRODUCT } from "../../../constants/controlPanelRoutes.js";
import { numberFormatPrice } from "../../../utils/numberFormatPrice.js";
import ActiveCircle from "../../common/ActiveCircle/ActiveCircle.jsx";
import Edit from "../../icons/Edit.jsx";
import css from "./style.module.css";

export default function ProductCard({
	id,
	images,
	name,
	subName,
	stock,
	salePrice,
	active,
	discount
}) {
	return (
		<div className={css.card}>
			<ActiveCircle className={css.activeCircle} isAvtive={active} />
			<img className={css.img} src={images[0].small} alt={name} />
			<div className={css.wrapper1}>
				<span className={css.name}>{name}</span>
				<span className={css.subName}>{subName}</span>
			</div>
			<span className={css.stock}>{stock} items</span>
			<span>{numberFormatPrice(salePrice)}</span>
			<span className={css.discount}>-{discount}%</span>
			<Link to={`${EDIT_PRODUCT}${id}`}>
				<Edit className={css.edit} />
			</Link>
		</div>
	);
}

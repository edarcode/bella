import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./style.module.css";

export default function RenderProductCards({ products }) {
	if (!products) return null;
	if (!products.length) return <p>No hay productos</p>;
	return (
		<div className={css.wrapperProducts}>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

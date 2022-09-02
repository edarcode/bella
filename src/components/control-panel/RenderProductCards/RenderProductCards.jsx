import { calcClassName } from "../../../utils/calcClassName.js";
import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./style.module.css";

export default function RenderProductCards({
	products,
	loading,
	err,
	className
}) {
	if (err === 404) return <p>Ningún producto coincide con la búsqueda</p>;
	if (loading) return <p>Cargando...</p>;
	if (err) return <p>Error al cargar productos 😰</p>;
	if (!products || !products.length) return <p>No hay productos</p>;
	const finallyClassName = calcClassName(css, {
		baseClassName: "wrapperProducts",
		className
	});
	return (
		<div className={finallyClassName}>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

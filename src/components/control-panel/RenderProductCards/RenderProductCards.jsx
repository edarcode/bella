import ProductCard from "../ProductCard/ProductCard.jsx";
import css from "./style.module.css";

export default function RenderProductCards({ products, loading, err }) {
	if (err === 404) return <p>Ningún producto coincide con la búsqueda</p>;
	if (loading) return <p>Cargando...</p>;
	if (err) return <p>Error al cargar productos 😰</p>;
	if (!products || !products.length) return <p>No hay productos</p>;
	return (
		<div className={css.wrapperProducts}>
			{products.map(product => (
				<ProductCard key={product.id} {...product} />
			))}
		</div>
	);
}

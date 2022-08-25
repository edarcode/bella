import ProductCard from "../../common/ProductCard/ProductCard.jsx";
import css from "./style.module.css";

export default function RenderProducts({ products, loading }) {
	if (loading) return <p>Cargando productos...</p>;
	if (!products || !products.length)
		return <p>No hay productos para mostrar</p>;
	return (
		<div>
			<div className={css.wrapper1}>
				<ProductCard
					key={products[0].id}
					{...products[0]}
					img={products[0].images[0]}
				/>
				<ProductCard
					key={products[1].id}
					{...products[1]}
					img={products[1].images[0]}
				/>
			</div>
			<div className={css.wrapper2}>
				{products.map((product, index) => {
					if (index === 0 || index === 1) return null;
					return (
						<ProductCard
							key={product.id}
							{...product}
							img={product.images[0]}
						/>
					);
				})}
			</div>
		</div>
	);
}

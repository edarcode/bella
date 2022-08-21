import ProductCard from "../../common/ProductCard/ProductCard.jsx";

export default function RenderProducts({ products }) {
	if (!products) return null;
	return (
		<div>
			{products.map(product => (
				<ProductCard key={product.id} {...product} img={product.images[0]} />
			))}
		</div>
	);
}

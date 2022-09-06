import { useSelector } from "react-redux";
import RenderProducts from "../../components/client/RenderProducts/RenderProducts.jsx";

export default function Home() {
	const { products, loading, err } = useSelector(
		({ dataProductsClient }) => dataProductsClient
	);
	return (
		<div>
			<RenderProducts products={products} loading={loading} err={err} />
		</div>
	);
}

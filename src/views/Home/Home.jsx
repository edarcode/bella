import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderProducts from "../../components/client/RenderProducts/RenderProducts.jsx";
import { getDataProducts } from "../../redux/slices-client/data-products/thunks/getDataProducts.js";
import { getRandomBetween } from "../../utils/getRandomBetween.js";

export default function Home() {
	const dispatch = useDispatch();
	const { products, loading, err } = useSelector(
		({ dataProductsClient }) => dataProductsClient
	);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(
			getDataProducts(controller.signal, { page: getRandomBetween(0, 4) })
		);
		return () => controller.abort();
	}, [dispatch]);

	return (
		<div>
			<RenderProducts products={products} loading={loading} err={err} />
		</div>
	);
}

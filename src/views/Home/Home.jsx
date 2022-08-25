import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderProducts from "../../components/client/RenderProducts/RenderProducts.jsx";
import { getDataProducts } from "../../redux/slices-client/data-products/thunks/getDataProducts.js";

export default function Home() {
	const dispatch = useDispatch();
	const { products, loading } = useSelector(
		({ dataProductsClient }) => dataProductsClient
	);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts({ signal: controller.signal }));
		return () => controller.abort();
	}, [dispatch]);

	return (
		<div>
			<RenderProducts products={products} loading={loading} />
		</div>
	);
}

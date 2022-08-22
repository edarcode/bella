import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderProducts from "../../components/client/RenderProducts/RenderProducts.jsx";
import { getDataProducts } from "../../redux/slices-client/data-products/thunks/getDataProducts.js";

export default function Home() {
	const dispatch = useDispatch();
	const { products, loading } = useSelector(({ dataProducts }) => dataProducts);

	useEffect(() => {
		dispatch(getDataProducts());
	}, [dispatch]);

	return (
		<div>
			<RenderProducts products={products} loading={loading} />
		</div>
	);
}

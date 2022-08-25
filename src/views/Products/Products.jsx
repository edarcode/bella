import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paged from "../../components/control-panel/Paged/Paged.jsx";
import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { getDataProducts } from "../../redux/slices-control-panel/data-products/thunks/getDataProducts.js";
import css from "./style.module.css";

export default function Products() {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading } = useSelector(
		({ dataProducts }) => dataProducts
	);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts({ signal: controller.signal }));
		return () => controller.abort();
	}, [dispatch]);

	const reloadProducts = page => {
		dispatch(getDataProducts({ page }));
	};
	return (
		<div className={css.products}>
			<RenderProductCards products={products} loading={loading} />
			<Paged pageCount={pageCount} page={page} onClick={reloadProducts} />
		</div>
	);
}

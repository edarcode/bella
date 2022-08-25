import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { getDataProducts } from "../../redux/slices-control-panel/data-products/thunks/getDataProducts.js";
import css from "./style.module.css";

export default function Products() {
	const dispatch = useDispatch();
	const { products } = useSelector(({ dataProducts }) => dataProducts);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts({ signal: controller.signal }));
		return () => controller.abort();
	}, [dispatch]);
	return (
		<div className={css.products}>
			<RenderProductCards products={products} />
		</div>
	);
}

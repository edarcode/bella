import Paged from "../../components/common/Paged/Paged.jsx";
import FormFilterProducts from "../../components/control-panel/forms/FormFilterProducts/FormFilterProducts.jsx";

import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { useGetProducts } from "../../hooks/useGetProducts.js";
import css from "./style.module.css";

export default function Products() {
	const { products, loading, pageCount, page, reload, err } = useGetProducts();
	return (
		<div className={css.products}>
			<FormFilterProducts />
			<RenderProductCards products={products} loading={loading} err={err} />
			<Paged pageCount={pageCount} page={page} onClick={reload} />
		</div>
	);
}

import Paged from "../../components/common/Paged/Paged.jsx";
import WrapperFormProducts from "../../components/control-panel/forms-product/WrapperFormProducts/WrapperFormProducts.jsx";

import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { useGetProducts } from "../../hooks/useGetProducts.js";
import css from "./style.module.css";

export default function Products() {
	const { products, loading, pageCount, page, err, updatePage } =
		useGetProducts();
	return (
		<div className={css.products}>
			<WrapperFormProducts />
			<RenderProductCards products={products} loading={loading} err={err} />
			<Paged pageCount={pageCount} page={page} updatePage={updatePage} />
		</div>
	);
}

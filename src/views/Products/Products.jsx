import Paged from "../../components/common/Paged/Paged.jsx";
import FormSearchProduct from "../../components/control-panel/forms-product/FormSearchProduct/FormSearchProduct.jsx";
import WrapperFormProducts from "../../components/control-panel/forms-product/WrapperFormProducts/WrapperFormProducts.jsx";

import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { useGetProducts } from "../../hooks/useGetProducts.js";
import css from "./style.module.css";

export default function Products() {
	const { products, loading, pageCount, page, err, updatePage } =
		useGetProducts();
	return (
		<div className={css.products}>
			<FormSearchProduct className={css.search} />
			<WrapperFormProducts className={css.wrapperFormProducts} />
			<RenderProductCards
				className={css.productCards}
				products={products}
				loading={loading}
				err={err}
			/>
			<Paged
				className={css.paged}
				pageCount={pageCount}
				page={page}
				updatePage={updatePage}
			/>
		</div>
	);
}

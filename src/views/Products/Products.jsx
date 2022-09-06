import { useDispatch, useSelector } from "react-redux";
import Paged from "../../components/common/Paged/Paged.jsx";
import FormSearchProduct from "../../components/control-panel/forms-product/FormSearchProduct/FormSearchProduct.jsx";
import WrapperFormProducts from "../../components/control-panel/forms-product/WrapperFormProducts/WrapperFormProducts.jsx";

import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { changePage } from "../../redux/slices-control-panel/data-products/dataProducts.js";
import css from "./style.module.css";

export default function Products() {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading, err } = useSelector(
		({ dataProducts }) => dataProducts
	);
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
				updatePage={() => dispatch(changePage(page))}
			/>
		</div>
	);
}

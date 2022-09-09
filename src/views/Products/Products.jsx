import { useDispatch, useSelector } from "react-redux";
import ButtonLink from "../../components/buttons/ButtonLink/ButtonLink.jsx";
import Paged from "../../components/common/Paged/Paged.jsx";
import FormSearchProduct from "../../components/control-panel/forms-product/FormSearchProduct/FormSearchProduct.jsx";
import WrapperFormProducts from "../../components/control-panel/forms-product/WrapperFormProducts/WrapperFormProducts.jsx";

import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { CREATE_PRODUCT } from "../../constants/controlPanelRoutes.js";
import { changePage } from "../../redux/slices-control-panel/data-products/dataProducts.js";
import css from "./style.module.css";

export default function Products() {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading, err } = useSelector(
		({ dataProducts }) => dataProducts
	);
	return (
		<div className={css.products}>
			<ButtonLink to={CREATE_PRODUCT} className={css.createProduct}>
				Crear producto
			</ButtonLink>
			<WrapperFormProducts className={css.wrapperFormProducts} />
			<FormSearchProduct className={css.search} />
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
				updatePage={newPage => dispatch(changePage(newPage))}
			/>
		</div>
	);
}

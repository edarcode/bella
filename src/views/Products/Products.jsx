import ProductFilteringForm from "../../components/control-panel/forms/ProductFilteringForm/ProductFilteringForm.jsx";
import Paged from "../../components/control-panel/Paged/Paged.jsx";
import RenderProductCards from "../../components/control-panel/RenderProductCards/RenderProductCards.jsx";
import { useGetProducts } from "../../hooks/useGetProducts.js";
import css from "./style.module.css";

export default function Products() {
	const { products, loading, pageCount, page, reload, err } = useGetProducts();
	return (
		<div className={css.products}>
			<ProductFilteringForm />
			<RenderProductCards products={products} loading={loading} err={err} />
			<Paged pageCount={pageCount} page={page} onClick={reload} />
		</div>
	);
}

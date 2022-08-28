import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/slices-control-panel/data-products/dataProducts.js";
import { getDataProducts } from "../redux/slices-control-panel/data-products/thunks/getDataProducts.js";

export const useGetProducts = () => {
	const dispatch = useDispatch();
	const {
		products,
		pageCount,
		page,
		loading,
		err,
		filters: { name, minSalePrice, maxSalePrice, order }
	} = useSelector(({ dataProducts }) => dataProducts);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts(controller.signal, { page, order }));

		return () => controller.abort();
	}, [dispatch, order, page]);

	useEffect(() => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			const filters = { name, minSalePrice, maxSalePrice };
			dispatch(getDataProducts(controller.signal, filters));
		}, 400);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [dispatch, name, minSalePrice, maxSalePrice]);

	const updatePage = page => {
		dispatch(changePage(page));
	};

	return { products, pageCount, page, loading, err, updatePage };
};

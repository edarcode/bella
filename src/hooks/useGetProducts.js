import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changePage } from "../redux/slices-control-panel/data-products/dataProducts.js";
import { getDataProducts } from "../redux/slices-control-panel/data-products/thunks/getDataProducts.js";

export const useGetProducts = () => {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading, err, filters } = useSelector(
		({ dataProducts }) => dataProducts
	);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts(controller.signal, { page }));

		return () => {
			controller.abort();
		};
	}, [dispatch, page]);

	useEffect(() => {
		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			dispatch(
				getDataProducts(controller.signal, {
					minSalePrice: filters.minSalePrice,
					maxSalePrice: filters.maxSalePrice
				})
			);
		}, 400);
		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [dispatch, filters.minSalePrice, filters.maxSalePrice]);

	const updatePage = page => {
		dispatch(changePage(page));
	};

	return { products, pageCount, page, loading, err, updatePage };
};

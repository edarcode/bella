import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { STATUS_OPTIONS } from "../constants/statusOptions.js";
import { changePage } from "../redux/slices-control-panel/data-products/dataProducts.js";
import { getDataProducts } from "../redux/slices-control-panel/data-products/thunks/getDataProducts.js";

let isFirstRender = true;

export const useGetProducts = () => {
	const dispatch = useDispatch();
	const {
		products,
		pageCount,
		page,
		loading,
		err,
		filters: { name, minSalePrice, maxSalePrice, order, active, categoryId }
	} = useSelector(({ dataProducts }) => dataProducts);

	useEffect(() => {
		const controller = new AbortController();
		const isActiveDefault = active === STATUS_OPTIONS[0].value;
		const isCategoryIdDefault = categoryId === "default";
		dispatch(
			getDataProducts(
				controller.signal,
				{
					page,
					order,
					active: !isActiveDefault ? active : null,
					categoryId: !isCategoryIdDefault ? categoryId : null
				},
				isFirstRender
			)
		);

		return () => controller.abort();
	}, [dispatch, order, active, page, categoryId]);

	useEffect(() => {
		if (isFirstRender) return;
		const controller = new AbortController();
		const timeoutId = setTimeout(() => {
			const filters = { name, minSalePrice, maxSalePrice };
			dispatch(getDataProducts(controller.signal, filters, isFirstRender));
		}, 400);

		return () => {
			clearTimeout(timeoutId);
			controller.abort();
		};
	}, [dispatch, name, minSalePrice, maxSalePrice]);

	useEffect(() => {
		isFirstRender = false;
	}, []);

	const updatePage = page => {
		dispatch(changePage(page));
	};

	return { products, pageCount, page, loading, err, updatePage };
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT } from "../constants/default.js";
import { changePage } from "../redux/slices-control-panel/data-products/dataProducts.js";
import { getDataProducts } from "../redux/slices-control-panel/data-products/thunks/getDataProducts.js";

let isFirstRender = true;

export const useGetProducts = () => {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading, err, filters } = useSelector(
		({ dataProducts }) => dataProducts
	);

	useEffect(() => {
		const controller = new AbortController();
		const isActiveDefault = filters.active === DEFAULT;
		const isCategoryIdDefault = filters.categoryId === DEFAULT;

		dispatch(
			getDataProducts(
				controller.signal,
				{
					...filters,
					page,
					active: !isActiveDefault ? filters.active : null,
					categoryId: !isCategoryIdDefault ? filters.categoryId : null
				},
				isFirstRender
			)
		);

		return () => controller.abort();
	}, [dispatch, filters, page]);

	useEffect(() => {
		isFirstRender = false;
	}, []);

	const updatePage = page => {
		dispatch(changePage(page));
	};

	return { products, pageCount, page, loading, err, updatePage };
};

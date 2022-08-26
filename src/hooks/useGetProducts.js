import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDataProducts } from "../redux/slices-control-panel/data-products/thunks/getDataProducts.js";

export const useGetProducts = () => {
	const dispatch = useDispatch();
	const { products, pageCount, page, loading, err } = useSelector(
		({ dataProducts }) => dataProducts
	);

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getDataProducts({ signal: controller.signal }));
		return () => {
			controller.abort();
		};
	}, [dispatch]);

	const reload = page => {
		dispatch(getDataProducts({ page }));
	};

	return { products, pageCount, page, loading, err, reload };
};

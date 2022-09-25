import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getDataProducts } from "../redux/slices-client/data-products/thunks/getDataProducts.js";
import { getRandomBetween } from "../utils/getRandomBetween.js";

export const useGetProductsClient = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const controller = new AbortController();
		dispatch(
			getDataProducts(controller.signal, { page: getRandomBetween(0, 0) })
		);
		return () => controller.abort();
	}, [dispatch]);
};

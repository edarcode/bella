import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DEFAULT } from "../constants/default.js";
import { getDataSuppliers } from "../redux/slices-control-panel/data-suppliers/thunks/getDataSuppliers.js";

let isFirstRender = true;

export const useGetSuppliers = () => {
	const dispatch = useDispatch();
	const { page, filters } = useSelector(({ dataSuppliers }) => dataSuppliers);
	const { token } = useSelector(({ user }) => user);

	useEffect(() => {
		const controller = new AbortController();
		const isActiveDefault = filters.active === DEFAULT;
		const isProductIdDefault = filters.categoryId === DEFAULT;

		dispatch(
			getDataSuppliers(
				controller.signal,
				{
					...filters,
					page,
					active: !isActiveDefault ? filters.active : null,
					productId: !isProductIdDefault ? filters.categoryId : null
				},
				{ token, isFirstRender }
			)
		);

		return () => controller.abort();
	}, [dispatch, filters, page, token]);

	useEffect(() => {
		isFirstRender = false;
	}, []);
};

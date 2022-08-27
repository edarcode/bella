import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCategories } from "../redux/slices-globals/categories/thunks/getCategories.js";

export const useGetCategories = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		const controller = new AbortController();
		dispatch(getCategories(controller.signal));
		return controller.abort();
	}, [dispatch]);
};

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailProduct } from "../redux/slices-control-panel/detail-product/thunks/getDetailProduct.js";

export const useGetDetailProducts = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(() => {
		dispatch(getDetailProduct(id));
	}, [dispatch, id]);
};

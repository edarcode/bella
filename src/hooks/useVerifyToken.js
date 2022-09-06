import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyToken } from "../redux/slices-globals/user/thunks/verifyToken.js";

export const useVerifyToken = () => {
	const dispatch = useDispatch();
	useEffect(() => {
		const controller = new AbortController();
		const token = localStorage.getItem("token");
		token && dispatch(verifyToken(controller.signal, { token }));

		return () => controller.abort();
	}, [dispatch]);
};

import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LOGIN } from "../../../constants/clientRoutes.js";

export default function AuthControlPanel({ children }) {
	const { token } = useSelector(({ user }) => user);
	if (!token) return <Navigate to={LOGIN} replace />;
	return children;
}

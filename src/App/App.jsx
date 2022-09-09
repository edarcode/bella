import { Route, Routes } from "react-router-dom";
import AuthControlPanel from "../components/auth/AuthControlPanel/AuthControlPanel.jsx";
import { CLIENT, LOGIN, REGISTER } from "../constants/clientPaths.js";
import { NOT_FOUND } from "../constants/commonPaths.js";
import {
	BILLS,
	CATEGORIES,
	CONTROL_PANEL,
	CREATE_PRODUCT,
	EDIT_PRODUCT,
	SUPPLIERS,
	USERS
} from "../constants/controlPanelPaths.js";
import { useGetProductsClient } from "../hooks/useGetProductsClient.js";
import { useVerifyToken } from "../hooks/useVerifyToken.js";
import Bills from "../views/Bills/Bills.jsx";
import Categories from "../views/Categories/Categories.jsx";
import Client from "../views/Client/Client.jsx";
import ControlPanel from "../views/ControlPanel/ControlPanel.jsx";
import CreateProduct from "../views/CreateProduct/CreateProduct.jsx";
import EditProduct from "../views/EditProduct/EditProduct.jsx";
import Home from "../views/Home/Home.jsx";
import Login from "../views/Login/Login.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";
import Products from "../views/Products/Products.jsx";
import Register from "../views/Register/Register.jsx";
import Suppliers from "../views/Suppliers/Suppliers.jsx";
import Users from "../views/Users/Users.jsx";
import css from "./style.module.css";

export default function App() {
	useGetProductsClient();
	useVerifyToken();
	return (
		<div className={css.app}>
			<Routes>
				{/* ------------------Client------------------------------ */}
				<Route path={CLIENT} element={<Client />}>
					<Route index element={<Home />} />
					<Route path={REGISTER} element={<Register />} />
					<Route path={LOGIN} element={<Login />} />
				</Route>
				{/* ------------------ControlPanel------------------------------ */}
				<Route
					path={CONTROL_PANEL}
					element={
						<AuthControlPanel>
							<ControlPanel />
						</AuthControlPanel>
					}
				>
					<Route index element={<Products />} />
					<Route path={`${EDIT_PRODUCT}:id`} element={<EditProduct />} />
					<Route path={CREATE_PRODUCT} element={<CreateProduct />} />
					<Route path={USERS} element={<Users />} />
					<Route path={BILLS} element={<Bills />} />
					<Route path={SUPPLIERS} element={<Suppliers />} />
					<Route path={CATEGORIES} element={<Categories />} />
				</Route>
				{/* ------------------COMMON------------------------------ */}
				<Route path={NOT_FOUND} element={<NotFound />} />
			</Routes>
		</div>
	);
}

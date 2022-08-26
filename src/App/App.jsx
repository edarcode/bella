import { Route, Routes } from "react-router-dom";
import { CLIENT } from "../constants/clientPaths.js";
import {
	BILLS,
	CATEGORIES,
	CONTROL_PANEL,
	SUPPLIERS,
	USERS
} from "../constants/controlPanelPaths.js";
import Bills from "../views/Bills/Bills.jsx";
import Categories from "../views/Categories/Categories.jsx";
import Client from "../views/Client/Client.jsx";
import ControlPanel from "../views/ControlPanel/ControlPanel.jsx";
import Home from "../views/Home/Home.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";
import Products from "../views/Products/Products.jsx";
import Suppliers from "../views/Suppliers/Suppliers.jsx";
import Users from "../views/Users/Users.jsx";
import css from "./style.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Routes>
				{/* ------------------Client------------------------------ */}
				<Route path={CLIENT} element={<Client />}>
					<Route index element={<Home />} />
				</Route>
				{/* ------------------ControlPanel------------------------------ */}
				<Route path={CONTROL_PANEL} element={<ControlPanel />}>
					<Route index element={<Products />} />
					<Route path={USERS} element={<Users />} />
					<Route path={BILLS} element={<Bills />} />
					<Route path={SUPPLIERS} element={<Suppliers />} />
					<Route path={CATEGORIES} element={<Categories />} />
				</Route>
				{/* ------------------NotFound------------------------------ */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

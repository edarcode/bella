import { Route, Routes } from "react-router-dom";
import { client, controlPanel } from "../constants/paths.js";
import Client from "../views/Client/Client.jsx";
import ControlPanel from "../views/ControlPanel/ControlPanel.jsx";
import Home from "../views/Home/Home.jsx";
import NotFound from "../views/NotFound/NotFound.jsx";
import ProductManager from "../views/ProductManager/ProductManager.jsx";
import css from "./style.module.css";

export default function App() {
	return (
		<div className={css.app}>
			<Routes>
				{/* ------------------Client------------------------------ */}
				<Route path={client} element={<Client />}>
					<Route index element={<Home />} />
				</Route>
				{/* ------------------ControlPanel------------------------------ */}
				<Route path={controlPanel} element={<ControlPanel />}>
					<Route index element={<ProductManager />} />
				</Route>
				{/* ------------------NotFound------------------------------ */}
				<Route path="*" element={<NotFound />} />
			</Routes>
		</div>
	);
}

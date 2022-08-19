import { Outlet } from "react-router-dom";
import Footer from "../../components/client/Footer/Footer.jsx";
import Header from "../../components/client/Header/Header.jsx";
import css from "./style.module.css";

export default function Client() {
	return (
		<div className={css.client}>
			<Header />
			<div className={css.outlet}>
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

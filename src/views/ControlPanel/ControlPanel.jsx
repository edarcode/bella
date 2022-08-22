import { Outlet } from "react-router-dom";
import Aside from "../../components/control-panel/Aside/Aside.jsx";
import Footer from "../../components/control-panel/Footer/Footer.jsx";
import css from "./style.module.css";

export default function ControlPanel() {
	return (
		<div className={css.control}>
			<Aside className={css.aside} />
			<main className={css.main}>
				<Outlet />
			</main>
			<Footer className={css.footer} />
		</div>
	);
}

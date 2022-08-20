import SocialMedia from "../../common/SocialMedia/SocialMedia.jsx";
import css from "./style.module.css";

export default function Footer() {
	return (
		<footer className={css.footer}>
			<nav className={css.nav1}>
				<a href="#">Acerca de Bella</a>
				<a href="#">Servicios</a>
			</nav>
			<div className={css.wrapper}>
				<span>Colombia</span>
				<span>Copyright © 2022 Bella Inc. Todos los derechos reservados.</span>
			</div>
			<nav className={css.nav2}>
				<a href="#">Política de privacidad</a>
				<a href="#">Aviso legal</a>
			</nav>
			<SocialMedia />
		</footer>
	);
}

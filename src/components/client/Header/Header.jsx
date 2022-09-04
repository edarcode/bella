import { useState } from "react";
import IconCollapseMenu from "../../common/IconCollapseMenu/IconCollapseMenu.jsx";
import Logo from "../../common/Logo/Logo.jsx";
import MainNav from "../MainNav/MainNav.jsx";
import css from "./style.module.css";

export default function Header() {
	const [isActiveMainNav, setIsActiveMainNav] = useState(false);

	return (
		<header className={css.header}>
			<IconCollapseMenu
				isCollapse={isActiveMainNav}
				setIsCollapse={setIsActiveMainNav}
				className={css.iconMenu}
			/>
			<Logo className={css.logo} />
			<MainNav
				className={css.mainNav}
				isActive={isActiveMainNav}
				setIsCollapse={setIsActiveMainNav}
			/>
		</header>
	);
}

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
			/>
			<Logo className={css.logo} />
			{isActiveMainNav && <MainNav className={css.mainNav} />}
		</header>
	);
}

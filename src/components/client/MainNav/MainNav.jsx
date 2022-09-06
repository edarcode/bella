import { NavLink } from "react-router-dom";
import { MAIN_NAV } from "../../../constants/mainNav.js";
import { calcClassName } from "../../../utils/calcClassName.js";
import { isActiveNavLink } from "../../../utils/isActiveNavLink.js";
import NavLinkControlPanel from "../NavLinkControlPanel/NavLinkControlPanel.jsx";
import css from "./style.module.css";

export default function MainNav({ className, isActive, setIsCollapse }) {
	if (!isActive) return null;
	const finallyClassName = calcClassName(css, {
		baseClassName: "mainNav",
		className
	});
	return (
		<nav className={finallyClassName}>
			{MAIN_NAV.map(({ id, route, text }) => (
				<NavLink
					key={id}
					to={route}
					onClick={() => setIsCollapse(false)}
					className={({ isActive }) =>
						isActiveNavLink({
							isActive,
							baseClassName: css.link,
							activeClassName: css.activeLink
						})
					}
				>
					{text}
				</NavLink>
			))}
			<NavLinkControlPanel onClick={() => setIsCollapse(false)} />
		</nav>
	);
}

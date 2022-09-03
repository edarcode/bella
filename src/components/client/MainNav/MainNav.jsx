import { NavLink } from "react-router-dom";
import { MAIN_NAV } from "../../../constants/mainNav.js";
import { calcClassName } from "../../../utils/calcClassName.js";
import { isActiveNavLink } from "../../../utils/isActiveNavLink.js";
import css from "./style.module.css";

export default function MainNav({ className, isActive }) {
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
		</nav>
	);
}

import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { CONTROL_PANEL } from "../../../constants/controlPanelRoutes.js";

import { ADMIN, MASTER } from "../../../constants/roles.js";
import { isActiveNavLink } from "../../../utils/isActiveNavLink.js";
import css from "./style.module.css";

export default function NavLinkControlPanel(props) {
	const { token, role } = useSelector(({ user }) => user);
	if (!token) return null;
	if (role !== ADMIN && role !== MASTER) return null;
	return (
		<NavLink
			{...props}
			to={CONTROL_PANEL}
			className={({ isActive }) =>
				isActiveNavLink({
					isActive,
					baseClassName: css.link,
					activeClassName: css.activeLink
				})
			}
		>
			Panel de control
		</NavLink>
	);
}

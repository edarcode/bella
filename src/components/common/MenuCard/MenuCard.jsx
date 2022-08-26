import { NavLink } from "react-router-dom";
import { isActiveNavLink } from "../../../utils/isActiveNavLink.js";
import css from "./style.module.css";

export default function MenuCard({ icon, text, visibleText, to, onClick }) {
	const Icon = icon;

	if (!to) return null;
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				isActiveNavLink({
					isActive,
					baseClassName: css.card,
					activeClassName: css.activeNavLink
				})
			}
			onClick={onClick}
		>
			<Icon className={css.icon} />
			{visibleText && <span>{text}</span>}
		</NavLink>
	);
}

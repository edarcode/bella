import { MENU_CARDS } from "../../../constants/menuCards.js";
import MenuCard from "../../common/MenuCard/MenuCard.jsx";
import css from "./style.module.css";

export default function RenderMenuCards({ isCollapseMenu, contractMenu }) {
	return (
		<div className={css.menuCards}>
			{MENU_CARDS.map(item => (
				<MenuCard
					key={item.icon}
					{...item}
					visibleText={isCollapseMenu}
					to={item.route}
					onClick={contractMenu}
				/>
			))}
		</div>
	);
}

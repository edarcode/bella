import { useState } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import IconCollapseMenu from "../../common/IconCollapseMenu/IconCollapseMenu.jsx";
import RenderMenuCards from "../RenderMenuCards/RenderMenuCards.jsx";
import css from "./style.module.css";

export default function Aside({ className }) {
	const [isCollapseMenu, setIsCollapseMenu] = useState(false);
	const newClassName = calcClassName(css, {
		baseClassName: isCollapseMenu ? "aside asideCollapse" : "aside",
		className
	});

	const contractMenu = () => setIsCollapseMenu(false);

	return (
		<aside className={newClassName}>
			<div className={css.wrapper}>
				<IconCollapseMenu
					className={css.iconMenu}
					isCollapse={isCollapseMenu}
					setIsCollapse={setIsCollapseMenu}
				/>
				<RenderMenuCards
					isCollapseMenu={isCollapseMenu}
					contractMenu={contractMenu}
				/>
			</div>
		</aside>
	);
}

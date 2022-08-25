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

	return (
		<aside className={newClassName}>
			<div className={css.wrapper}>
				<IconCollapseMenu
					isCollapse={isCollapseMenu}
					setIsCollapse={setIsCollapseMenu}
					className={isCollapseMenu && css.iconCollapseMenu}
				/>
				<RenderMenuCards isCollapseMenu={isCollapseMenu} />
			</div>
		</aside>
	);
}

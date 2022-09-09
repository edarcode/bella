import { useState } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import IconCollapseMenu from "../../common/IconCollapseMenu/IconCollapseMenu.jsx";
import RenderMenuCards from "../RenderMenuCards/RenderMenuCards.jsx";
import css from "./style.module.css";

export default function Aside({ className }) {
	const [isCollapseMenu, setIsCollapseMenu] = useState(false);
	const finallyClassName = calcClassName({
		css,
		local: isCollapseMenu ? "aside asideCollapse" : "aside",
		outer: className
	});

	const contractMenu = () => setIsCollapseMenu(false);

	return (
		<aside className={finallyClassName}>
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

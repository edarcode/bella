import { useState } from "react";
import { calcClassName } from "../../../utils/calcClassName.js";
import IconCollapseMenu from "../../common/IconCollapseMenu/IconCollapseMenu.jsx";
import RenderMenuCards from "../RenderMenuCards/RenderMenuCards.jsx";
import css from "./style.module.css";

export default function Aside({ className }) {
	const [isCollapseMenu, setIsCollapseMenu] = useState(false);
	const newClassName = calcClassName(css, {
		baseClassName: "aside",
		className
	});
	return (
		<aside
			className={newClassName}
			style={
				(isCollapseMenu && {
					position: "absolute",
					height: "100vh"
				}) ||
				{}
			}
		>
			<IconCollapseMenu
				isCollapse={isCollapseMenu}
				setIsCollapse={setIsCollapseMenu}
				className={isCollapseMenu && css.iconCollapseMenu}
			/>
			<RenderMenuCards isCollapseMenu={isCollapseMenu} />
		</aside>
	);
}

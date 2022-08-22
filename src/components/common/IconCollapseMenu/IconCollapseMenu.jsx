import { calcClassName } from "../../../utils/calcClassName.js";
import Close from "../../icons/Close.jsx";
import OpenMenu from "../../icons/OpenMenu.jsx";
import css from "./style.module.css";

export default function IconCollapseMenu({
	isCollapse,
	setIsCollapse,
	className
}) {
	const newClassName = calcClassName(css, { baseClassName: "icon", className });

	const handleClickCollapse = () => setIsCollapse(!isCollapse);
	if (!isCollapse)
		return <OpenMenu className={newClassName} onClick={handleClickCollapse} />;
	return <Close className={newClassName} onClick={handleClickCollapse} />;
}

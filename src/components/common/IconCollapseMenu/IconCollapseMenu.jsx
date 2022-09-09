import { calcClassName } from "../../../utils/calcClassName.js";
import Close from "../../icons/Close.jsx";
import OpenMenu from "../../icons/OpenMenu.jsx";
import css from "./style.module.css";

export default function IconCollapseMenu({
	isCollapse,
	setIsCollapse,
	className
}) {
	const finallyClassName = calcClassName({
		css,
		local: "icon",
		outer: className
	});

	const handleClickCollapse = () => setIsCollapse(!isCollapse);
	if (!isCollapse)
		return (
			<OpenMenu className={finallyClassName} onClick={handleClickCollapse} />
		);
	return <Close className={finallyClassName} onClick={handleClickCollapse} />;
}

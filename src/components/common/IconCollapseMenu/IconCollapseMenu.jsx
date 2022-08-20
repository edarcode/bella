import Close from "../../icons/Close.jsx";
import OpenMenu from "../../icons/OpenMenu.jsx";
import css from "./style.module.css";

export default function IconCollapseMenu({ isCollapse, setIsCollapse }) {
	const handleClickCollapse = () => setIsCollapse(!isCollapse);
	if (!isCollapse)
		return <OpenMenu className={css.openMenu} onClick={handleClickCollapse} />;
	return <Close className={css.closeMenu} onClick={handleClickCollapse} />;
}

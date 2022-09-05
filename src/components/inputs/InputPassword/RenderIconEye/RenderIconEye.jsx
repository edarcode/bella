import CloseEye from "../../../icons/CloseEye.jsx";
import OpenEye from "../../../icons/OpenEye.jsx";

export default function RenderIconEye({ isOpenEye, ...props }) {
	if (!isOpenEye) return <CloseEye {...props} />;
	return <OpenEye {...props} />;
}

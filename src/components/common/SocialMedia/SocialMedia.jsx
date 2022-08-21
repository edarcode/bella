import { calcClassName } from "../../../utils/calcClassName.js";
import css from "./style.module.css";

export default function SocialMedia({ className }) {
	const newClassName = calcClassName(css, {
		baseClassName: "social",
		className
	});
	return (
		<div className={newClassName}>
			<img src="/social-media/instagram.svg" alt="instagram" />
			<img src="/social-media/facebook.svg" alt="facebook" />
			<img src="/social-media/wasap.svg" alt="whats app" />
			<img src="/social-media/gmail.svg" alt="gmail" />
		</div>
	);
}

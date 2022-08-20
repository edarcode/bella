import css from "./style.module.css";

export default function SocialMedia() {
	return (
		<div className={css.social}>
			<img src="/social-media/instagram.svg" alt="instagram" />
			<img src="/social-media/facebook.svg" alt="facebook" />
			<img src="/social-media/wasap.svg" alt="whats app" />
			<img src="/social-media/gmail.svg" alt="gmail" />
		</div>
	);
}

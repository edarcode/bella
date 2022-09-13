import css from "./style.module.css";
import CheckCircle from "./svgs/CheckCircle.jsx";
import CrossCircle from "./svgs/CrossCircle.jsx";
import Loading from "./svgs/Loading.jsx";

export default function RenderIcon({ loading, err, success }) {
	if (err) return <CrossCircle className={css.err} />;
	if (loading) return <Loading className={css.loading} />;
	if (success) return <CheckCircle className={css.success} />;
	return null;
}

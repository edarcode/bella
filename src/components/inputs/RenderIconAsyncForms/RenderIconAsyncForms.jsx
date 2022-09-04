import CheckCircle from "../../icons/CheckCircle.jsx";
import CrossCircle from "../../icons/CrossCircle.jsx";
import Loading from "../../icons/Loading.jsx";

import css from "./style.module.css";

export default function RenderIconAsyncForms({
	success,
	loading,
	err,
	className
}) {
	const styles = {
		success: !className ? css.success : `${css.success} ${className}`,
		loading: !className ? css.loading : `${css.loading} ${className}`,
		err: !className ? css.err : `${css.err} ${className}`
	};
	if (err) return <CrossCircle className={styles.err} />;
	if (loading) return <Loading className={styles.loading} />;
	if (success) return <CheckCircle className={styles.success} />;
	return null;
}

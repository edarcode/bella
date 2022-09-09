import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/buttons/Button/Button.jsx";
import Spinner from "../../components/common/Spinner/Spinner.jsx";
import InputEmail from "../../components/inputs/InputEmail/InputEmail.jsx";
import InputPassword from "../../components/inputs/InputPassword/InputPassword.jsx";
import { REGISTER } from "../../constants/clientRoutes.js";
import { useNavigateViews } from "../../hooks/useNavigateViews.js";
import {
	saveEmail,
	savePassword
} from "../../redux/slices-globals/login/login.js";
import { getToken } from "../../redux/slices-globals/login/thunks/getToken.js";
import { validateEmail } from "../../utils/validations/validateEmail.js";
import css from "./style.module.css";

export default function Login() {
	useNavigateViews();
	const dispatch = useDispatch();
	const { email, password, err, loading } = useSelector(({ login }) => login);

	const isValidSubmit = email && password && !validateEmail(email);

	const handleChangeEmail = e => {
		const email = e.target.value;
		dispatch(saveEmail(email));
	};

	const handleChangePassword = e => {
		const password = e.target.value;
		dispatch(savePassword(password));
	};

	const handleSubmitLogin = e => {
		e.preventDefault();
		if (!isValidSubmit) return;
		dispatch(getToken({ email, password }));
	};

	return (
		<div className={css.register}>
			<form className={css.form} onSubmit={handleSubmitLogin}>
				{err && <p className={css.err}>{err} 😱</p>}
				<InputEmail
					placeholder="Email"
					value={email}
					onChange={handleChangeEmail}
				/>
				<InputPassword
					placeholder="Password"
					value={password}
					onChange={handleChangePassword}
				/>
				<div className={css.wrapperForgetPass}>
					<a href="">¿Olvidó su password?</a>
					<Link to={REGISTER}>Ir a registro</Link>
				</div>
				<Button disabled={!isValidSubmit}>Login</Button>
				<Spinner className={css.spinner} isVisible={loading} />
			</form>
		</div>
	);
}

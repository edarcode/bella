import { useReducer } from "react";
import { NavLink } from "react-router-dom";
import Button from "../../components/buttons/Button/Button.jsx";
import Spinner from "../../components/common/Spinner/Spinner.jsx";
import InputEmail from "../../components/inputs/InputEmail/InputEmail.jsx";
import InputPassword from "../../components/inputs/InputPassword/InputPassword.jsx";
import { LOGIN } from "../../constants/clientRoutes.js";
import {
	FETCH_ERR,
	FETCH_LOADING,
	FETCH_SUCCESS,
	SAVE_EMAIL,
	SAVE_PASSWORD
} from "../../reducers/register/actions.js";
import { initialRegister, register } from "../../reducers/register/register.js";
import { fetchRegister } from "../../utils/fetchs/fetchRegister.js";
import css from "./style.module.css";

export default function Register() {
	const [{ email, password, loading, err }, dispatch] = useReducer(
		register,
		initialRegister
	);

	const isValidateSubmit =
		email.value && !email.err && password.value && !password.err;

	const handleChangeEmail = e => {
		const email = e.target.value;
		dispatch({ type: SAVE_EMAIL, payload: email });
	};

	const handleChangePassword = e => {
		const password = e.target.value;
		dispatch({ type: SAVE_PASSWORD, payload: password });
	};

	const handleSubmitRegister = async e => {
		e.preventDefault();
		if (!isValidateSubmit) return;

		try {
			dispatch({ type: FETCH_LOADING });
			const { data } = await fetchRegister(null, {
				email: email.value,
				password: password.value
			});
			dispatch({ type: FETCH_SUCCESS, payload: data?.msg });
		} catch (error) {
			const {
				response: { data }
			} = error;
			dispatch({ type: FETCH_ERR, payload: data?.msg });
		}
	};

	return (
		<div className={css.register}>
			<form className={css.form} onSubmit={handleSubmitRegister}>
				{err && <p className={css.err}>{err} 😱</p>}
				<InputEmail
					placeholder="Email"
					err={email.err}
					value={email.value}
					onChange={handleChangeEmail}
				/>
				<InputPassword
					placeholder="Password"
					err={password.err}
					value={password.value}
					onChange={handleChangePassword}
				/>
				<NavLink to={LOGIN} className={css.forgetPass}>
					Ir a login
				</NavLink>
				<Button disabled={!isValidateSubmit}>Registrar</Button>
				<Spinner isVisible={loading} className={css.spinner} />
			</form>
		</div>
	);
}

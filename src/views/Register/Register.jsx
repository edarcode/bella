import { useReducer } from "react";
import Button from "../../components/buttons/Button/Button.jsx";
import InputEmail from "../../components/inputs/InputEmail/InputEmail.jsx";
import InputPassword from "../../components/inputs/InputPassword/InputPassword.jsx";
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
		const isValidateSubmit =
			email.value && !email.err && password.value && !password.err;
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

	if (loading) return <p>Procesando registro...</p>;
	return (
		<div className={css.register}>
			<form className={css.form} onSubmit={handleSubmitRegister}>
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
				<a href="" className={css.forgetPass}>
					¿Olvidó su password?
				</a>
				<Button>Registrar</Button>
				{err && <p>{err}</p>}
			</form>
		</div>
	);
}

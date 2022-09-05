import { useReducer } from "react";
import Button from "../../components/buttons/Button/Button.jsx";
import InputEmail from "../../components/inputs/InputEmail/InputEmail.jsx";
import InputPassword from "../../components/inputs/InputPassword/InputPassword.jsx";
import { SAVE_EMAIL, SAVE_PASSWORD } from "../../reducers/register/actions.js";
import { initialRegister, register } from "../../reducers/register/register.js";
import css from "./style.module.css";

export default function Register() {
	const [{ email, password }, dispatch] = useReducer(register, initialRegister);

	const handleChangeEmail = e => {
		const email = e.target.value;
		dispatch({ type: SAVE_EMAIL, payload: email });
	};
	const handleChangePassword = e => {
		const password = e.target.value;
		dispatch({ type: SAVE_PASSWORD, payload: password });
	};

	return (
		<div className={css.register}>
			<form className={css.form}>
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
			</form>
		</div>
	);
}

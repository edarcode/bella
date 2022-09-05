import InputEmailAsync from "../../components/inputs/InputEmailAsync/InputEmailAsync.jsx";
import InputPassword from "../../components/inputs/InputPassword/InputPassword.jsx";

export default function Register() {
	return (
		<form>
			<InputEmailAsync placeholder="Email" err="" loading="" success="" />
			<InputPassword placeholder="Password" />
		</form>
	);
}

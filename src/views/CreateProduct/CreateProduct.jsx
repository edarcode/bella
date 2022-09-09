import InputCheckbox from "../../components/inputs/InputCheckbox/InputCheckbox.jsx";
import css from "./style.module.css";

export default function CreateProduct() {
	return (
		<div>
			<form>
				<InputCheckbox text="Activo" className={css.algo} />
			</form>
		</div>
	);
}

import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import css from "./style.module.css";

export default function CreateProduct() {
	return (
		<div className={css.createProduct}>
			<form className={css.form}>
				<InputNumber placeholder="Stock" />
				<InputText placeholder="Título" />
				<InputText placeholder="Sub título" />
				<InputNumber placeholder="Precio de compra" />
				<InputNumber placeholder="Precio de venta" />
				<Textarea placeholder="Descripción" />
			</form>
		</div>
	);
}

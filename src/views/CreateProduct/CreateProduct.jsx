import { useSelector } from "react-redux";
import Button from "../../components/buttons/Button/Button.jsx";
import SelectMultiple from "../../components/common/SelectMultiple/SelectMultiple.jsx";

import InputFile from "../../components/inputs/InputFile/InputFile.jsx";
import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import css from "./style.module.css";

export default function CreateProduct() {
	const { allCategories } = useSelector(({ categories }) => categories);
	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputNumber placeholder="Stock" min={0} />
				<InputText placeholder="Título" />
				<InputText placeholder="Sub título" />
				<InputNumber placeholder="Precio de compra" min={0} />
				<InputNumber placeholder="Precio de venta" min={0} />
				<Textarea placeholder="Descripción" />
				<InputFile />
				<SelectMultiple about="Categorías" dataChecks={allCategories} />
				<Button>Crear producto</Button>
			</form>
		</div>
	);
}

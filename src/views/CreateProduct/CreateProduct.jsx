import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/buttons/Button/Button.jsx";
import SelectMultiple from "../../components/common/SelectMultiple/SelectMultiple.jsx";
import SelectMultiplePaged from "../../components/common/SelectMultiplePaged/SelectMultiplePaged.jsx";

import InputFile from "../../components/inputs/InputFile/InputFile.jsx";
import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import { savePage } from "../../redux/slices-control-panel/data-suppliers/dataSuppliers.js";
import css from "./style.module.css";

export default function CreateProduct() {
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);
	const { suppliers, page, pageCount } = useSelector(
		({ dataSuppliers }) => dataSuppliers
	);

	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputText placeholder="Título" />
				<InputText placeholder="Sub título" />
				<InputNumber placeholder="Stock" min={0} />
				<InputNumber placeholder="Precio de compra" min={0} />
				<InputNumber placeholder="Precio de venta" min={0} />
				<Textarea placeholder="Descripción" />
				<InputFile />
				<SelectMultiple about="Categorías" dataChecks={allCategories} />
				<SelectMultiplePaged
					about="Proveedores"
					dataChecks={suppliers}
					page={page}
					pageCount={pageCount}
					onPage={newPage => dispatch(savePage(newPage))}
				/>
				<Button>Crear producto</Button>
			</form>
		</div>
	);
}

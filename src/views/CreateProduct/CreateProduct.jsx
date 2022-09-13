import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/buttons/Button/Button.jsx";
import SelectMultiple from "../../components/common/SelectMultiple/SelectMultiple.jsx";
import SelectMultiplePaged from "../../components/common/SelectMultiplePaged/SelectMultiplePaged.jsx";
import InputFile from "../../components/inputs/InputFile/InputFile.jsx";
import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import { useCreateProduct } from "../../hooks/useCreateProduct.js";
import { savePage } from "../../redux/slices-control-panel/data-suppliers/dataSuppliers.js";
import { getHandles } from "./handles/getHandles.js";
import css from "./style.module.css";

export default function CreateProduct() {
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);
	const {
		suppliers: allSuppliers,
		page,
		pageCount
	} = useSelector(({ dataSuppliers }) => dataSuppliers);
	const {
		name,
		subName,
		stock,
		buyPrice,
		salePrice,
		description,
		categories,
		suppliers,
		...saveMethods
	} = useCreateProduct();

	const handles = getHandles(saveMethods);

	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputText
					placeholder="Título"
					name="name"
					value={name.value}
					onChange={handles.handleChangeName}
				/>
				<InputText
					placeholder="Sub título"
					name="subName"
					value={subName.value}
					onChange={handles.handleChangeSubName}
				/>
				<InputNumber
					placeholder="Stock"
					min={0}
					value={stock.value}
					onChange={handles.handleChangeStock}
				/>
				<InputNumber
					placeholder="Precio de compra"
					min={0}
					value={buyPrice.value}
					onChange={handles.handleChangeBuyPrice}
				/>
				<InputNumber
					placeholder="Precio de venta"
					min={0}
					value={salePrice.value}
					onChange={handles.handleChangeSalePrice}
				/>
				<Textarea
					placeholder="Descripción"
					name="description"
					value={description.value}
					onChange={handles.handleChangeDescription}
				/>
				<InputFile multiple onChange={handles.handleChangeImages} />
				<SelectMultiple
					about="Categorías"
					dataChecks={allCategories}
					value={categories}
					onChange={handles.handleChangeCategories}
				/>
				<SelectMultiplePaged
					about="Proveedores"
					dataChecks={allSuppliers}
					page={page}
					pageCount={pageCount}
					onPage={newPage => dispatch(savePage(newPage))}
					value={suppliers}
					onChange={handles.handleChangeSuppliers}
				/>
				<Button>Crear producto</Button>
			</form>
		</div>
	);
}

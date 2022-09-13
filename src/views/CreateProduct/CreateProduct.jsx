import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/buttons/Button/Button.jsx";
import SelectMultiple from "../../components/common/SelectMultiple/SelectMultiple.jsx";
import SelectMultiplePaged from "../../components/common/SelectMultiplePaged/SelectMultiplePaged.jsx";
import InputImages from "../../components/inputs/InputImages/InputImages.jsx";
import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import { useCreateProduct } from "../../hooks/useCreateProduct.js";
import { savePage } from "../../redux/slices-control-panel/data-suppliers/dataSuppliers.js";
import { fetchCreateProduct } from "../../utils/fetch-control-panel/fetchCreateProduct.js";
import { getHandles } from "./handles/getHandles.js";
import css from "./style.module.css";

export default function CreateProduct() {
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);
	const { token } = useSelector(({ user }) => user);
	const {
		suppliers: allSuppliers,
		page,
		pageCount
	} = useSelector(({ dataSuppliers }) => dataSuppliers);
	const {
		isValidateDataFormCreateProduct, // no va incluido el campo de imagenes
		name,
		subName,
		stock,
		buyPrice,
		salePrice,
		description,
		images,
		categories,
		suppliers,
		...saveMethods
	} = useCreateProduct();

	const handles = getHandles(saveMethods);
	const handleSubmitCreateProduct = async e => {
		e.preventDefault();
		if (!isValidateDataFormCreateProduct) return;
		try {
			const res = await fetchCreateProduct(
				null,
				{
					name: name.value,
					subName: subName.value,
					stock: stock.value,
					buyPrice: buyPrice.value,
					salePrice: salePrice.value,
					description: description.value,
					categories,
					images: images.value,
					suppliers
				},
				{ token }
			);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={handleSubmitCreateProduct}>
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
				<InputImages
					multiple
					onChange={handles.handleChangeImages}
					loading={images.loading}
					err={images.err}
					success={images.success}
				/>
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
				<Button disabled={!isValidateDataFormCreateProduct}>
					Crear producto
				</Button>
			</form>
		</div>
	);
}

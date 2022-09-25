import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/buttons/Button/Button.jsx";
import SelectMultiple from "../../components/common/SelectMultiple/SelectMultiple.jsx";
import SelectMultiplePaged from "../../components/common/SelectMultiplePaged/SelectMultiplePaged.jsx";
import Spinner from "../../components/common/Spinner/Spinner.jsx";
import InputImages from "../../components/inputs/InputImages/InputImages.jsx";
import InputNumber from "../../components/inputs/InputNumber/InputNumber.jsx";
import InputText from "../../components/inputs/InputText/InputText.jsx";
import Textarea from "../../components/inputs/Textarea/Textarea.jsx";
import Alert from "../../components/pop-ups/Alert/Alert.jsx";
import { useCreateProduct } from "../../hooks/useCreateProduct.js";
import { getDataProducts } from "../../redux/slices-control-panel/data-products/thunks/getDataProducts.js";
import { savePage } from "../../redux/slices-control-panel/data-suppliers/dataSuppliers.js";
import { getHandles } from "./handles/getHandles.js";
import css from "./style.module.css";

export default function CreateProduct() {
	const inputImages = useRef(null);
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);
	const dataSuppliers = useSelector(({ dataSuppliers }) => dataSuppliers);
	const { token } = useSelector(({ user }) => user);

	const {
		name,
		subName,
		stock,
		buyPrice,
		salePrice,
		description,
		images,
		categories,
		suppliers,
		isValidateDataFormCreateProduct,
		submitCreateProduct,
		loading,
		success,
		err,
		clearSuccessAndErr,
		...saveMethods
	} = useCreateProduct();

	useEffect(() => {
		if (inputImages && success) inputImages.current.value = null;
	}, [success]);

	const handles = getHandles({
		...saveMethods,
		isValidateDataFormCreateProduct,
		submitCreateProduct
	});

	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={handles.handleSubmitCreateProduct}>
				<Spinner className={css.spinner} isVisible={loading} />
				<Alert
					className={css.alert}
					text={success || err}
					textBtn="Ok"
					isVisible={success || err}
					onClick={() => {
						dispatch(getDataProducts(null, null, { token }));
						clearSuccessAndErr();
					}}
				/>
				<InputText
					className={css.name}
					placeholder="Título"
					value={name.value}
					onChange={handles.handleChangeName}
				/>
				<InputText
					className={css.subName}
					placeholder="Sub título"
					value={subName.value}
					onChange={handles.handleChangeSubName}
				/>
				<InputNumber
					className={css.buyPrice}
					placeholder="$ compra"
					err={buyPrice.err}
					min={0}
					value={buyPrice.value}
					onChange={handles.handleChangeBuyPrice}
				/>
				<InputNumber
					className={css.salePrice}
					placeholder="$ venta"
					min={0}
					err={salePrice.err}
					value={salePrice.value}
					onChange={handles.handleChangeSalePrice}
				/>
				<InputNumber
					className={css.stock}
					placeholder="Stock"
					err={stock.err}
					min={0}
					value={stock.value}
					onChange={handles.handleChangeStock}
				/>
				<InputImages
					className={css.images}
					innerRef={inputImages}
					multiple
					onChange={handles.handleChangeImages}
					loading={images.loading}
					err={images.err}
					success={images.success}
				/>
				<Textarea
					className={css.description}
					placeholder="Descripción"
					name="description"
					value={description.value}
					onChange={handles.handleChangeDescription}
				/>
				<SelectMultiple
					className={css.categories}
					about="Categorías"
					dataChecks={allCategories}
					value={categories}
					onChange={handles.handleChangeCategories}
				/>
				<SelectMultiplePaged
					className={css.suppliers}
					about="Proveedores"
					dataChecks={dataSuppliers.suppliers}
					page={dataSuppliers.page}
					pageCount={dataSuppliers.pageCount}
					onPage={newPage => dispatch(savePage(newPage))}
					value={suppliers}
					onChange={handles.handleChangeSuppliers}
				/>
				<Button
					className={css.btnSubmit}
					disabled={!isValidateDataFormCreateProduct}
				>
					Crear producto
				</Button>
			</form>
		</div>
	);
}

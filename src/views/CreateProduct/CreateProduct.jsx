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
import css from "./style.module.css";

export default function CreateProduct() {
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);
	const { suppliers, page, pageCount } = useSelector(
		({ dataSuppliers }) => dataSuppliers
	);
	const { stock, buyPrice, salePrice, saveStock, saveBuyPrice, saveSalePrice } =
		useCreateProduct();

	const handleChangeStock = e => {
		const stock = e.target.value;
		saveStock(stock);
	};
	const handleChangeBuyPrice = e => {
		const buyPrice = e.target.value;
		saveBuyPrice(buyPrice);
	};
	const handleChangeSalePrice = e => {
		const salePrice = e.target.value;
		saveSalePrice(salePrice);
	};

	return (
		<div className={css.createProduct}>
			<form className={css.form} onSubmit={e => e.preventDefault()}>
				<InputText placeholder="Título" name="name" />
				<InputText placeholder="Sub título" name="subName" />
				<InputNumber
					placeholder="Stock"
					min={0}
					value={stock.value}
					onChange={handleChangeStock}
				/>
				<InputNumber
					placeholder="Precio de compra"
					min={0}
					value={buyPrice.value}
					onChange={handleChangeBuyPrice}
				/>
				<InputNumber
					placeholder="Precio de venta"
					min={0}
					value={salePrice.value}
					onChange={handleChangeSalePrice}
				/>
				<Textarea placeholder="Descripción" name="description" />
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

import { useReducer } from "react";
import { useSelector } from "react-redux";
import {
	CLEAR_SUCCESS_AND_ERR,
	CREATE_PRODUCT,
	ERR_CREATE_PRODUCT,
	ERR_IMAGES,
	LOADING_CREATE_PRODUCT,
	LOADING_IMAGES,
	SAVE_BUY_PRICE,
	SAVE_CATEGORIES,
	SAVE_DESCRIPTION,
	SAVE_IMAGES,
	SAVE_NAME,
	SAVE_SALE_PRICE,
	SAVE_STOCK,
	SAVE_SUBNAME,
	SAVE_SUPPLIERS
} from "../reducers/createProduct/actions.js";
import {
	createProduct,
	initialCreateProduct
} from "../reducers/createProduct/createProduct.js";
import { fetchCreateProduct } from "../utils/fetch-control-panel/fetchCreateProduct.js";
import { uploadImagesCloudinary } from "../utils/uploadImagesCloudinary.js";

export const useCreateProduct = () => {
	const [dataFormCreateProduct, dispatch] = useReducer(
		createProduct,
		initialCreateProduct
	);
	const { token } = useSelector(({ user }) => user);

	const saveName = name => {
		dispatch({ type: SAVE_NAME, payload: name });
	};
	const saveSubName = subName => {
		dispatch({ type: SAVE_SUBNAME, payload: subName });
	};
	const saveStock = stock => {
		dispatch({ type: SAVE_STOCK, payload: stock });
	};
	const saveBuyPrice = buyPrice => {
		dispatch({ type: SAVE_BUY_PRICE, payload: buyPrice });
	};
	const saveSalePrice = salePrice => {
		dispatch({ type: SAVE_SALE_PRICE, payload: salePrice });
	};
	const saveDescription = description => {
		dispatch({ type: SAVE_DESCRIPTION, payload: description });
	};
	const saveImages = async fileImages => {
		try {
			dispatch({ type: LOADING_IMAGES });
			const images = await uploadImagesCloudinary(fileImages);
			dispatch({ type: SAVE_IMAGES, payload: images });
		} catch (error) {
			dispatch({ type: ERR_IMAGES });
		}
	};
	const saveCategories = categoryId => {
		dispatch({ type: SAVE_CATEGORIES, payload: categoryId });
	};
	const saveSuppliers = supplierId => {
		dispatch({ type: SAVE_SUPPLIERS, payload: supplierId });
	};
	const submitCreateProduct = async () => {
		try {
			dispatch({ type: LOADING_CREATE_PRODUCT });
			const { data } = await fetchCreateProduct(
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
			dispatch({ type: CREATE_PRODUCT, payload: data.msg });
		} catch (error) {
			dispatch({ type: ERR_CREATE_PRODUCT });
		}
	};
	const clearSuccessAndErr = () => {
		dispatch({ type: CLEAR_SUCCESS_AND_ERR });
	};
	const {
		name,
		subName,
		stock,
		buyPrice,
		salePrice,
		description,
		images,
		categories,
		suppliers
	} = dataFormCreateProduct;
	const isValidateDataFormCreateProduct =
		name.value &&
		!name.err &&
		subName.value &&
		!subName.err &&
		stock.value &&
		!stock.err &&
		buyPrice.value &&
		!buyPrice.err &&
		salePrice.value &&
		!salePrice.err &&
		description.value &&
		!description.err &&
		categories &&
		categories.length &&
		suppliers &&
		suppliers.length &&
		images.value &&
		images.value.length;

	return {
		...dataFormCreateProduct,
		saveName,
		saveSubName,
		saveStock,
		saveBuyPrice,
		saveSalePrice,
		saveDescription,
		saveImages,
		saveCategories,
		saveSuppliers,
		isValidateDataFormCreateProduct,
		submitCreateProduct,
		clearSuccessAndErr
	};
};

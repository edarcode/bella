export const getHandles = ({
	saveName,
	saveSubName,
	saveStock,
	saveBuyPrice,
	saveSalePrice,
	saveDescription,
	saveImages,
	saveCategories,
	saveSuppliers
}) => {
	const handleChangeName = e => {
		const name = e.target.value;
		saveName(name);
	};
	const handleChangeSubName = e => {
		const subName = e.target.value;
		saveSubName(subName);
	};
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
	const handleChangeDescription = e => {
		const description = e.target.value;
		saveDescription(description);
	};
	const handleChangeImages = async e => {
		const fileImages = e.target.files;
		saveImages(fileImages);
	};
	const handleChangeCategories = e => {
		const categoryId = e.target.value;
		saveCategories(categoryId);
	};
	const handleChangeSuppliers = e => {
		const supplierId = e.target.value;
		saveSuppliers(supplierId);
	};

	return {
		handleChangeName,
		handleChangeSubName,
		handleChangeStock,
		handleChangeBuyPrice,
		handleChangeSalePrice,
		handleChangeDescription,
		handleChangeImages,
		handleChangeCategories,
		handleChangeSuppliers
	};
};

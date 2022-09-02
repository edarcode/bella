import { DATA_PRODUCTS_CLIENT } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataProducts = async (signal, filters) => {
	const url = addQueryToUrl(DATA_PRODUCTS_CLIENT, filters);
	const res = await axios({
		method: "GET",
		url,
		signal
	});

	return res;
};
const addQueryToUrl = (url, querys) => {
	if (!querys) return url;
	const {
		page,
		name,
		order,
		productsPerPage,
		minSalePrice,
		maxSalePrice,
		categoryId
	} = querys;
	const newUrl = new URL(url);

	if (page) newUrl.searchParams.append("page", page);
	if (name) newUrl.searchParams.append("name", name);
	if (order) newUrl.searchParams.append("order", order);
	if (productsPerPage)
		newUrl.searchParams.append("productsPerPage", productsPerPage);
	if (minSalePrice) newUrl.searchParams.append("minSalePrice", minSalePrice);
	if (maxSalePrice) newUrl.searchParams.append("maxSalePrice", maxSalePrice);
	if (categoryId) newUrl.searchParams.append("categoryId", categoryId);

	return newUrl.href;
};

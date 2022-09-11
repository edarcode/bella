import { DATA_PRODUCTS } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataProducts = async (signal, querys, { token }) => {
	const url = addQueryToUrl(DATA_PRODUCTS, querys);
	const res = await axios({
		method: "GET",
		url,
		headers: { token },
		signal
	});

	return res;
};

const addQueryToUrl = (url, querys) => {
	if (!querys) return url;
	const {
		page,
		name,
		active,
		order,
		productsPerPage,
		minSalePrice,
		maxSalePrice,
		categoryId
	} = querys;
	const newUrl = new URL(url);

	if (page) newUrl.searchParams.append("page", page);
	if (name) newUrl.searchParams.append("name", name);
	if (active) newUrl.searchParams.append("active", active);
	if (order) newUrl.searchParams.append("order", order);
	if (productsPerPage)
		newUrl.searchParams.append("productsPerPage", productsPerPage);
	if (minSalePrice) newUrl.searchParams.append("minSalePrice", minSalePrice);
	if (maxSalePrice) newUrl.searchParams.append("maxSalePrice", maxSalePrice);
	if (categoryId) newUrl.searchParams.append("categoryId", categoryId);

	return newUrl.href;
};

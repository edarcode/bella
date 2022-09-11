import { DATA_SUPPLIERS } from "../../constants/endPointsApi.js";
import { axios } from "../axios.js";

export const fetchDataSuppliers = async (signal, querys, { token }) => {
	const url = addQueryToUrl(DATA_SUPPLIERS, querys);
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
		suppliersPerPage,
		tell,
		email,
		productId
	} = querys;
	const newUrl = new URL(url);

	if (page) newUrl.searchParams.append("page", page);
	if (name) newUrl.searchParams.append("name", name);
	if (active) newUrl.searchParams.append("active", active);
	if (order) newUrl.searchParams.append("order", order);
	if (suppliersPerPage)
		newUrl.searchParams.append("suppliersPerPage", suppliersPerPage);
	if (tell) newUrl.searchParams.append("tell", tell);
	if (email) newUrl.searchParams.append("email", email);
	if (productId) newUrl.searchParams.append("productId", productId);

	return newUrl.href;
};

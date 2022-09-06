import { configureStore } from "@reduxjs/toolkit";
import { dataProductsClient } from "./slices-client/data-products/dataProductsClient.js";
import { dataProducts } from "./slices-control-panel/data-products/dataProducts.js";
import { categories } from "./slices-globals/categories/categories.js";
import { login } from "./slices-globals/login/login.js";

export const store = configureStore({
	reducer: {
		[categories.name]: categories.reducer,
		[dataProductsClient.name]: dataProductsClient.reducer,
		[dataProducts.name]: dataProducts.reducer,
		[login.name]: login.reducer
	}
});

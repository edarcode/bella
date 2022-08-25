import { configureStore } from "@reduxjs/toolkit";
import { dataProductsClient } from "./slices-client/data-products/dataProductsClient.js";
import { dataProducts } from "./slices-control-panel/data-products/dataProducts.js";

export const store = configureStore({
	reducer: {
		[dataProductsClient.name]: dataProductsClient.reducer,
		[dataProducts.name]: dataProducts.reducer
	}
});

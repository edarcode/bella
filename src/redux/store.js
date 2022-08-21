import { configureStore } from "@reduxjs/toolkit";
import { dataProducts } from "./slices-client/data-products/dataProducts.js";

export const store = configureStore({
	reducer: { [dataProducts.name]: dataProducts.reducer }
});

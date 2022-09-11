import { fetchDataSuppliers } from "../../../../utils/fetch-control-panel/fetchDataSuppliers.js";
import {
	errDataSuppliers,
	loadingDataSuppliers,
	saveDataSuppliers
} from "../dataSuppliers.js";

export const getDataSuppliers = (signal, filters, { token, isFirstRender }) => {
	return async dispatch => {
		try {
			isFirstRender && dispatch(loadingDataSuppliers());
			const { data } = await fetchDataSuppliers(signal, filters, { token });
			dispatch(saveDataSuppliers(data));
		} catch (error) {
			const {
				response: { status }
			} = error;
			if (status === 404) return dispatch(errDataSuppliers(404));
			dispatch(errDataSuppliers());
		}
	};
};

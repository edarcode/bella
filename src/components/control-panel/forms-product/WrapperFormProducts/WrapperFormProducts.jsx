import { useGetCategories } from "../../../../hooks/useGetCategories.js";
import FormFilterProducts from "../FormFilterProducts/FormFilterProducts.jsx";

export default function WrapperFormProducts() {
	useGetCategories();
	return (
		<div>
			<FormFilterProducts />
		</div>
	);
}

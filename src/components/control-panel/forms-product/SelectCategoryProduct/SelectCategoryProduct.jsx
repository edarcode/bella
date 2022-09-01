import { useDispatch, useSelector } from "react-redux";
import { changeCategoryId } from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import Select from "../../../inputs/Select/Select.jsx";

export default function SelectCategoryProduct() {
	const dispatch = useDispatch();
	const { allCategories } = useSelector(({ categories }) => categories);

	const handleChangeCategoryId = e => {
		const categoryId = e.target.value;
		dispatch(changeCategoryId(categoryId));
	};
	return (
		<Select onChange={handleChangeCategoryId}>
			<option value="default">Defecto</option>
			{allCategories.map(({ id, name }) => (
				<option key={id} value={id}>
					{name}
				</option>
			))}
		</Select>
	);
}

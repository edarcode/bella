import { useSelector } from "react-redux";
import Select from "../../../inputs/Select/Select.jsx";

export default function SelectCategoryProduct() {
	const { allCategories } = useSelector(({ categories }) => categories);
	return (
		<Select>
			<option value="default">Defecto</option>
			{allCategories.map(({ id, name }) => (
				<option key={id} value={id}>
					{name}
				</option>
			))}
		</Select>
	);
}

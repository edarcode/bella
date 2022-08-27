import { SORT_BY_OPTIONS } from "../../../../constants/sortByOptions.js";
import Select from "../../../inputs/Select/Select.jsx";

export default function SelectSortProduct() {
	return (
		<Select>
			{SORT_BY_OPTIONS.map(({ id, value, display }) => (
				<option key={id} value={value}>
					{display}
				</option>
			))}
		</Select>
	);
}

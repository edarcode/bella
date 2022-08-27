import { useState } from "react";
import { SORT_BY_OPTIONS } from "../../../../constants/sortByOptions.js";
import Select from "../../../inputs/Select/Select.jsx";

export default function SelectSortProduct() {
	const [directionSort, setDirectionSort] = useState(true);
	const handleClickDirectionSort = () => setDirectionSort(!directionSort);
	return (
		<Select
			directionSort={directionSort ? "ASC" : "DESC"}
			onDirectionSort={handleClickDirectionSort}
		>
			{SORT_BY_OPTIONS.map(({ id, value, display }) => (
				<option key={id} value={value}>
					{display}
				</option>
			))}
		</Select>
	);
}

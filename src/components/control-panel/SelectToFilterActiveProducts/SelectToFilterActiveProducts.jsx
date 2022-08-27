import { STATUS_OPTIONS } from "../../../constants/statusOptions.js";
import Select from "../../inputs/Select/Select.jsx";

export default function SelectToFilterActiveProducts() {
	return (
		<Select>
			{STATUS_OPTIONS.map(({ id, value, display }) => (
				<option key={id} value={value}>
					{display}
				</option>
			))}
		</Select>
	);
}

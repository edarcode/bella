import { useDispatch, useSelector } from "react-redux";
import { STATUS_OPTIONS } from "../../../../constants/statusOptions.js";
import { changeActive } from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import Select from "../../../inputs/Select/Select.jsx";

export default function SelectStateProduct() {
	const dispatch = useDispatch();
	const { active } = useSelector(({ dataProducts }) => dataProducts.filters);
	const handleChangeStatus = e => {
		const status = e.target.value;
		dispatch(changeActive(status));
	};
	return (
		<Select onChange={handleChangeStatus} value={active}>
			{STATUS_OPTIONS.map(({ id, value, display }) => (
				<option key={id} value={value}>
					{display}
				</option>
			))}
		</Select>
	);
}

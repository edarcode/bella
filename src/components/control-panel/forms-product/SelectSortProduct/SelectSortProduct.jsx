import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SORT_BY_OPTIONS } from "../../../../constants/sortByOptions.js";
import { changeOrder } from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import Select from "../../../inputs/Select/Select.jsx";

const ASC = "asc";
const DESC = "desc";

export default function SelectSortProduct() {
	const dispatch = useDispatch();
	const { order } = useSelector(({ dataProducts }) => dataProducts.filters);
	const [directionSort, setDirectionSort] = useState(ASC);

	const handleClickDirectionSort = () => {
		const orderParse = JSON.parse(order);
		if (directionSort === DESC) {
			orderParse[1] = ASC;
			setDirectionSort(ASC);
		} else {
			orderParse[1] = DESC;
			setDirectionSort(DESC);
		}
		const orderStringify = JSON.stringify(orderParse);
		dispatch(changeOrder(orderStringify));
	};

	const handleChangeOrder = e => {
		const order = e.target.value;
		dispatch(changeOrder(order));
	};

	return (
		<Select
			directionSort={directionSort}
			onDirectionSort={handleClickDirectionSort}
			value={order}
			onChange={handleChangeOrder}
		>
			{SORT_BY_OPTIONS.map(({ id, asc, desc, display }) => (
				<option key={id} value={directionSort === DESC ? desc : asc}>
					{display}
				</option>
			))}
		</Select>
	);
}

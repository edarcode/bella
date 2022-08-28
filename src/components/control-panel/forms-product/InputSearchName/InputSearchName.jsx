import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";

export default function InputSearchName() {
	const dispatch = useDispatch();
	const { name } = useSelector(({ dataProducts }) => dataProducts.filters);
	const handleChangeName = e => {
		const name = e.target.value;
		dispatch(changeName(name));
	};
	return (
		<InputSearch
			placeholder="Buscar..."
			value={name}
			onChange={handleChangeName}
		/>
	);
}

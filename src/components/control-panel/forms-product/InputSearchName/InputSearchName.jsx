import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { changeName } from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";

export default function InputSearchName() {
	const dispatch = useDispatch();
	const [name, setName] = useState("");

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			dispatch(changeName(name));
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [dispatch, name]);

	const handleChangeName = e => {
		const name = e.target.value;
		setName(name);
	};
	return (
		<InputSearch
			placeholder="Buscar..."
			value={name}
			onChange={handleChangeName}
		/>
	);
}

import { SORT_BY_OPTIONS } from "../../../../constants/sortByOptions.js";
import { STATUS_OPTIONS } from "../../../../constants/statusOptions.js";
import InputSearch from "../../../inputs/InputSearch/InputSearch.jsx";
import Select from "../../../inputs/Select/Select.jsx";
import css from "./style.module.css";

export default function FormFilterProducts() {
	return (
		<form className={css.form}>
			<InputSearch placeholder="Buscar..." />
			<Select>
				{STATUS_OPTIONS.map(({ id, value, display }) => (
					<option key={id} value={value}>
						{display}
					</option>
				))}
			</Select>
			<Select>
				{SORT_BY_OPTIONS.map(({ id, value, display }) => (
					<option key={id} value={value}>
						{display}
					</option>
				))}
			</Select>
		</form>
	);
}

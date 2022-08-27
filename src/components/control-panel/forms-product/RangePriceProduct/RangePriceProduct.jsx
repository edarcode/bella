import { useState } from "react";
import InputRange from "../../../inputs/InputRange/InputRange.jsx";

export default function RangePriceProduct() {
	const [valueRange, setValueRange] = useState(0);
	const handleChangeRange = e => {
		const value = e.target.value;
		setValueRange(value);
	};
	return (
		<div>
			<InputRange
				max={500000}
				step={10000}
				value={valueRange}
				onChange={handleChangeRange}
			/>
		</div>
	);
}

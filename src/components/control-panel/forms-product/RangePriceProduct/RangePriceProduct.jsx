import { useDispatch, useSelector } from "react-redux";
import { MAX_PRICE_RANGE } from "../../../../constants/priceRange.js";
import {
	changeMaxSalePrice,
	changeMinSalePrice
} from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import InputRange from "../../../inputs/InputRange/InputRange.jsx";

export default function RangePriceProduct() {
	const dispatch = useDispatch();
	const { minSalePrice, maxSalePrice } = useSelector(
		({ dataProducts }) => dataProducts.filters
	);

	const handleChangeMinSalePrice = e => {
		const price = Number(e.target.value);
		dispatch(changeMinSalePrice(price));
	};

	const handleChangeMaxSalePrice = e => {
		const price = Number(e.target.value);
		dispatch(changeMaxSalePrice(price));
	};

	return (
		<div>
			<InputRange
				text="$ Min"
				value={minSalePrice}
				onChange={handleChangeMinSalePrice}
				max={MAX_PRICE_RANGE}
			/>
			<InputRange
				text="$ Max"
				value={maxSalePrice}
				max={MAX_PRICE_RANGE}
				onChange={handleChangeMaxSalePrice}
			/>
		</div>
	);
}

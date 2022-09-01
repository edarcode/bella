import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MAX_PRICE_RANGE } from "../../../../constants/priceRange.js";
import { useDebounce } from "../../../../hooks/useDebounce.js";
import {
	changeMaxSalePrice,
	changeMinSalePrice,
	resetSalePrice
} from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import InputRange from "../../../inputs/InputRange/InputRange.jsx";

export default function RangePriceProduct() {
	const dispatch = useDispatch();
	const [rangePriceProduct, setRangePriceProduct] = useState({
		minSalePrice: 0,
		maxSalePrice: 0
	});
	const rangePriceProductDebounce = useDebounce(rangePriceProduct);

	useEffect(() => {
		const { minSalePrice, maxSalePrice } = rangePriceProductDebounce;
		dispatch(changeMinSalePrice(minSalePrice));
		dispatch(changeMaxSalePrice(maxSalePrice));

		return () => dispatch(resetSalePrice());
	}, [dispatch, rangePriceProductDebounce]);

	const handleChangeMinSalePrice = e => {
		const minSalePrice = Number(e.target.value);
		setRangePriceProduct({ ...rangePriceProduct, minSalePrice });
	};

	const handleChangeMaxSalePrice = e => {
		const maxSalePrice = Number(e.target.value);
		setRangePriceProduct({ ...rangePriceProduct, maxSalePrice });
	};

	return (
		<div>
			<InputRange
				text="$ Min"
				value={rangePriceProduct.minSalePrice}
				max={MAX_PRICE_RANGE}
				onChange={handleChangeMinSalePrice}
			/>
			<InputRange
				text="$ Max"
				value={rangePriceProduct.maxSalePrice}
				max={MAX_PRICE_RANGE}
				onChange={handleChangeMaxSalePrice}
			/>
		</div>
	);
}

import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MAX_PRICE_RANGE } from "../../../../constants/priceRange.js";
import {
	changeMaxSalePrice,
	changeMinSalePrice
} from "../../../../redux/slices-control-panel/data-products/dataProducts.js";
import InputRange from "../../../inputs/InputRange/InputRange.jsx";

export default function RangePriceProduct() {
	const dispatch = useDispatch();
	const [rangePriceProduct, setRangePriceProduct] = useState({
		minSalePrice: 0,
		maxSalePrice: 0
	});

	useEffect(() => {
		const timeoutId = setTimeout(() => {
			const { minSalePrice, maxSalePrice } = rangePriceProduct;
			dispatch(changeMinSalePrice(minSalePrice));
			dispatch(changeMaxSalePrice(maxSalePrice));
		}, 500);

		return () => clearTimeout(timeoutId);
	}, [dispatch, rangePriceProduct]);

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
				text="Min"
				value={rangePriceProduct.minSalePrice}
				max={MAX_PRICE_RANGE}
				onChange={handleChangeMinSalePrice}
			/>
			<InputRange
				text="Max"
				value={rangePriceProduct.maxSalePrice}
				max={MAX_PRICE_RANGE}
				onChange={handleChangeMaxSalePrice}
			/>
		</div>
	);
}

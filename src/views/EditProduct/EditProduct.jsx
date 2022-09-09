import { useSelector } from "react-redux";
import { useGetDetailProducts } from "../../hooks/useGetDetailProducts.js";

export default function EditProduct() {
	useGetDetailProducts();
	const { loading, err } = useSelector(({ detailProduct }) => detailProduct);

	if (loading) return <p>Cargando product...</p>;
	if (err) return <p>{err}</p>;
	return <div>EditProduct</div>;
}

import { useParams } from "react-router-dom";

export default function EditProduct() {
	const { id } = useParams();
	console.log(id);
	return <div>EditProduct</div>;
}

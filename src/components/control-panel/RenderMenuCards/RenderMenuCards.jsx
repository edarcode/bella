import MenuCard from "../../common/MenuCard/MenuCard.jsx";
import Bill from "../../icons/Bill.jsx";
import Clothing from "../../icons/Clothing.jsx";
import Tags from "../../icons/Tags.jsx";
import Truck from "../../icons/Truck.jsx";
import Users from "../../icons/Users.jsx";
import css from "./style.module.css";

const MENU_CARDS = [
	{
		icon: Clothing,
		text: "Productos"
	},
	{
		icon: Users,
		text: "Usuarios"
	},
	{
		icon: Bill,
		text: "Facturas"
	},
	{
		icon: Truck,
		text: "Proveedores"
	},
	{
		icon: Tags,
		text: "Categorías"
	}
];

export default function RenderMenuCards({ isCollapseMenu }) {
	return (
		<div className={css.menuCards}>
			{MENU_CARDS.map(item => (
				<MenuCard key={item.icon} {...item} visibleText={isCollapseMenu} />
			))}
		</div>
	);
}

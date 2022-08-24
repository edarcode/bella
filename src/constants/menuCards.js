import Bill from "../components/icons/Bill.jsx";
import Clothing from "../components/icons/Clothing.jsx";
import Tags from "../components/icons/Tags.jsx";
import Truck from "../components/icons/Truck.jsx";
import Users from "../components/icons/Users.jsx";
import {
	BILLS,
	CATEGORIES,
	PRODUCTS,
	SUPPLIERS,
	USERS
} from "./controlPanelRoutes.js";

export const MENU_CARDS = [
	{
		icon: Clothing,
		text: "Productos",
		route: PRODUCTS
	},
	{
		icon: Users,
		text: "Usuarios",
		route: USERS
	},
	{
		icon: Bill,
		text: "Facturas",
		route: BILLS
	},
	{
		icon: Truck,
		text: "Proveedores",
		route: SUPPLIERS
	},
	{
		icon: Tags,
		text: "Categorías",
		route: CATEGORIES
	}
];

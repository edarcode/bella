import Bill from "../components/icons/Bill.jsx";
import Clothing from "../components/icons/Clothing.jsx";
import Tags from "../components/icons/Tags.jsx";
import Truck from "../components/icons/Truck.jsx";
import Users from "../components/icons/Users.jsx";
import { CLIENT } from "./clientPaths.js";
import {
	BILLS,
	CATEGORIES,
	PRODUCTS,
	SUPPLIERS,
	USERS
} from "./controlPanelRoutes.js";

export const MENU_CARDS = [
	{
		id: crypto.randomUUID(),
		icon: Clothing,
		text: "Productos",
		route: PRODUCTS
	},
	{
		id: crypto.randomUUID(),
		icon: Users,
		text: "Usuarios",
		route: USERS
	},
	{
		id: crypto.randomUUID(),
		icon: Bill,
		text: "Facturas",
		route: BILLS
	},
	{
		id: crypto.randomUUID(),
		icon: Truck,
		text: "Proveedores",
		route: SUPPLIERS
	},
	{
		id: crypto.randomUUID(),
		icon: Tags,
		text: "Categorías",
		route: CATEGORIES
	},
	{
		id: crypto.randomUUID(),
		icon: Tags,
		text: "Inicio",
		route: CLIENT
	}
];

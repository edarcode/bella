import { HOME, LOGIN, REGISTER } from "./clientRoutes.js";

export const MAIN_NAV = [
	{
		id: crypto.randomUUID(),
		text: "Inicio",
		route: HOME
	},
	{
		id: crypto.randomUUID(),
		text: "Registro",
		route: REGISTER
	},
	{
		id: crypto.randomUUID(),
		text: "Login",
		route: LOGIN
	}
];

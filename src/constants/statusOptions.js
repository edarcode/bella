import { DEFAULT } from "./default.js";

export const STATUS_OPTIONS = [
	{
		id: crypto.randomUUID(),
		value: DEFAULT,
		display: "Todos"
	},
	{
		id: crypto.randomUUID(),
		value: true,
		display: "Activos"
	},
	{
		id: crypto.randomUUID(),
		value: false,
		display: "Inactivos"
	}
];

export const SORT_BY_OPTIONS = [
	{
		id: crypto.randomUUID(),
		asc: '["id","asc"]',
		desc: '["id","desc"]',
		display: "Orden"
	},
	{
		id: crypto.randomUUID(),
		asc: '["name","asc"]',
		desc: '["name","desc"]',
		display: "Nombre"
	},
	{
		id: crypto.randomUUID(),
		asc: '["salePrice","asc"]',
		desc: '["salePrice","desc"]',
		display: "Precio"
	},
	{
		id: crypto.randomUUID(),
		asc: '["stock","asc"]',
		desc: '["stock","desc"]',
		display: "Items"
	}
];

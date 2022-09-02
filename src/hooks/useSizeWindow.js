import { useEffect, useState } from "react";

export const useSizeWindow = () => {
	const [widthWindow, setWidthWindow] = useState(window.innerWidth);
	useEffect(() => {
		const setSize = () => setWidthWindow(window.innerWidth);
		window.addEventListener("resize", setSize);
		return () => window.removeEventListener("resize", setSize);
	}, []);
	return { widthWindow };
};

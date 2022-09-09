import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { HOME } from "../constants/clientRoutes.js";
import { CONTROL_PANEL } from "../constants/controlPanelRoutes.js";

import { ADMIN, CLIENT, MASTER } from "../constants/roles.js";

export const useNavigateViews = () => {
	const goHome = useNavigate();
	const goControl = useNavigate();
	const { token, role } = useSelector(({ user }) => user);
	useEffect(() => {
		if ((token && role === MASTER) || role === ADMIN) goControl(CONTROL_PANEL);
		else if (token && role === CLIENT) goHome(HOME);
	}, [token, role, goHome, goControl]);
};

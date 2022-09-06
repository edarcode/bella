import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	email: "",
	role: "",
	token: ""
};

export const user = createSlice({
	name: "user",
	initialState,
	reducers: {
		saveDataUser: (user, { payload }) => {
			localStorage.setItem("token", payload.token);
			user.email = payload.email;
			user.role = payload.role;
			user.token = payload.token;
		}
	}
});

export const { saveDataUser } = user.actions;

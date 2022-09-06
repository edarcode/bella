import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	email: "",
	password: "",
	loading: false,
	err: ""
};

export const login = createSlice({
	name: "login",
	initialState,
	reducers: {
		saveEmail: (login, { payload }) => {
			login.email = payload;
		},
		savePassword: (login, { payload }) => {
			login.password = payload;
		},
		loadingToken: login => {
			login.loading = true;
			login.err = "";
		},
		saveErr: (login, { payload }) => {
			login.loading = false;
			login.err = payload || ERR;
		},
		clearLogin: () => {
			return { ...initialState };
		}
	}
});

export const { saveEmail, savePassword, loadingToken, saveErr, clearLogin } =
	login.actions;

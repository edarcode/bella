import { createSlice } from "@reduxjs/toolkit";
import { ERR } from "../../../constants/msgs.js";

const initialState = {
	email: "",
	password: "",
	token: "",
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
		loadingToken: (login, { payload }) => {
			login.loading = true;
			login.err = "";
		},
		saveErr: (login, { payload }) => {
			login.loading = false;
			login.err = payload || ERR;
		},
		saveToken: (login, { payload }) => {
			login.token = payload;
			login.loading = false;
			login.err = "";
		}
	}
});

export const { saveEmail, savePassword, loadingToken, saveErr, saveToken } =
	login.actions;

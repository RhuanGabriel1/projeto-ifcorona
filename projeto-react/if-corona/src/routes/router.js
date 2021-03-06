
import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../screens/contato";
import CreatePage from "../screens/create";
import Home from "../screens/home";
import Login from "../screens/login";
import SingUpPage from "../screens/singup";

function AppRoutes() {

	return (
		<Routes>
			<Route
				path="/"
				element={
					<Home/>
				}
			/>
            <Route
				path="/contato"
				element={
					<ContactPage/>
				}
			/>
			<Route
				path="/login"
				element={
					<Login/>
				}
			/>
			<Route
				path="/conta"
				element={
					<SingUpPage/>
				}
			/>
			<Route
				path="/criar"
				element={
					<CreatePage/>
				}
			/>
		</Routes>
	);
}

export default AppRoutes;
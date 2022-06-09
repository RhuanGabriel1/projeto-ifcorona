
import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../screens/contato";
import Home from "../screens/home";
import Account from "../screens/account";

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
				path="/conta"
				element={
					<Account/>
				}
			/>
		</Routes>
	);
}

export default AppRoutes;
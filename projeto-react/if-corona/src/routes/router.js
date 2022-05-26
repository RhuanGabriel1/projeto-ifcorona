
import React from "react";
import { Route, Routes } from "react-router";
import ContactPage from "../screens/contato";
import Home from "../screens/home";

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
		</Routes>
	);
}

export default AppRoutes;
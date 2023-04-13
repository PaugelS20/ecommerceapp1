import { useState, useEffect } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Authenticator } from "@aws-amplify/ui-react";


import Nav from "./Nav";
import Admin from "./Admin";
import Main from "./Main";
import Profile from "./Profile";



const Router = () => {
	const [current, setCurrent] = useState("home");
	useEffect(() => {
		setRoute();
		window.addEventListener("hashchange", setRoute);
		return () => window.removeEventListener("hashchange", setRoute); //giving a func back
	}, []);
	const setRoute = () => {
		const location = window.location.href.split("/");
		const pathname = location[location.length - 1];
		console.log("pathname: ", pathname);
		setCurrent(pathname ? pathname : "home");
	};
	return (
		<HashRouter>
			<Nav current={current} />
			<Routes>
				<Route exact path="/" element={<Main />} />
				{/* <Route path="/admin" element={<Admin />} /> */}
				<Route path="/admin" element={<Profile><Admin /></Profile>}/>
				<Route path="/profile" element={<Profile />} />
				<Route element={<Main />} />
			</Routes>
		</HashRouter>
	);
};
<Authenticator.Provider>
	<Router />
</Authenticator.Provider>;

export default Router;


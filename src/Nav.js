import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { HomeOutlined, UserOutlined, ProfileOutlined } from "@ant-design/icons";
import { Hub } from "aws-amplify";
import checkUser from "./checkUser";
import "./App.css";

const Nav = ({ current }) => {
	const [user, updateUser] = useState({});
	console.log(user);
	useEffect(() => {
		checkUser(updateUser);
		Hub.listen("auth", (data) => {
			const {payload: { event },} = data;
			console.log("event: ", event);
			if (event === "signIn" || event === "signOut")
			checkUser(updateUser);
		});
	}, []);
	const items = [
		{
			label: <Link to={`/`}>Home</Link>,
			key: "home",
			icon: <HomeOutlined />,
		},
		{
			label: <Link to={`/profile`}>Profile</Link>,
			key: "profile",
			icon: <UserOutlined />,
		},
		user.isAuthorized && ({
			label: <Link to={`/admin`}>Admin</Link>,
			key: "admin",
			icon: <ProfileOutlined />,
		}),
	];

	return (
		<Menu selectedKeys={[current]} mode="horizontal" items={items} />
		// <div>
		// 	<Menu selectedKeys={[current]} mode="horizontal">
		// 		<Menu.Item key="home">
		// 			<Link to={`/`}>
		// 				<HomeOutlined /> Home
		// 			</Link>
		// 		</Menu.Item>
				
        //         <Menu.Item key="profile">
		// 			<Link to="/profile">
		// 				<UserOutlined /> Profile
		// 			</Link>
		// 		</Menu.Item>
				
        //         {user.isAuthorized && (
		// 			<Menu.Item key="admin">
		// 				<Link to="/admin">
		// 					<ProfileOutlined /> Admin
		// 				</Link>
		// 			</Menu.Item>
		// 		)}
		// 	</Menu>
		// </div>
	);
};

export default Nav;


// const Nav = () => {

// 	return 
// };
// export default Nav;

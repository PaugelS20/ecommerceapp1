import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from "@aws-amplify/ui-react";

const Profile = () => {
	return (
		<Authenticator>
			{({ signOut, user }) => (
				<main>
					<h1>Profile</h1>
					<h2>Username: {user.username}</h2>
					<h3>Email: {user.email}</h3>
					<h4>Phone: {user.phone_number}</h4>
					<button onClick={signOut}>Sign out</button>
				</main>
			)}
		</Authenticator>
	);
};

const containerStyle = {
	width: 400,
	margin: "20px auto",
};
export default Profile;

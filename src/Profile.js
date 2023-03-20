import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";

const Profile = ({ signOut }) => {
	return (
		<div style={containerStyle}>
			<button onClick={signOut}>Sign out</button>
		</div>
	);
}

const containerStyle = {
	width: 400,
	margin: "20px auto",
};

export default withAuthenticator(Profile);

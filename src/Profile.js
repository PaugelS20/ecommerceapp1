import React from "react";
import "@aws-amplify/ui-react/styles.css";
// import { withAuthenticator } from "@aws-amplify/ui-react";
// import { Authenticator } from "@aws-amplify/ui-react";


import { useEffect } from "react";
import { Authenticator, useAuthenticator, View } from '@aws-amplify/ui-react';
import { useNavigate, useLocation } from 'react-router';
import '@aws-amplify/ui-react/styles.css';

const containerStyle = {
	width: 400,
	margin: "20px auto",
};

export default () => (
  <Authenticator.Provider>
    <Profile />
  </Authenticator.Provider>
);

const Profile = () => {
  const { route } = useAuthenticator((context) => [context.route]);
  const location = useLocation();
  const navigate = useNavigate();
  let from = location.state?.from?.pathname || '/';
  useEffect(() => {
    if (route === 'authenticated') {
      navigate(from, { replace: true });
    }
  }, [route, navigate, from]);
  return (
    <View className="auth-wrapper">
      <Authenticator></Authenticator>
    </View>
  );
}
// export default Profile;


// const Profile = () => {

// 	return (
// 		<Authenticator signUpAttributes={["email", "phone_number"]}>
// 			{({ signOut }) => (
// 				<main style={containerStyle}>
// 					{/* <button onClick={signOut}>Sign out</button> */}
// 						<button onClick={signOut}>Sign out</button>
// 				</main>
// 			)}
// 		</Authenticator>
// 		//
// 	);
// };
// export default Profile;



// import React from "react";
// import "./App.css";

// import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";

// const Profile = () => {
// 	return (
// 		<div style={containerStyle}>
// 			<AmplifySignOut />
// 		</div>
// 	);
// }

// const containerStyle = {
// 	width: 400,
// 	margin: "20px auto",
// };

// export default withAuthenticator(Profile);

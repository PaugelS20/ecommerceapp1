import React from "react";
import "@aws-amplify/ui-react/styles.css";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { Authenticator } from '@aws-amplify/ui-react';


const Profile = ({ signOut }) => {
	return (		
		<Authenticator
		signUpAttributes={[
			'email',
			'phone_number',
		]}>
      	{() => (
        <main>
          <button onClick={signOut}>Sign out</button>
        </main>
      	)}
    </Authenticator>
		// <div style={containerStyle}>
		// 	<button onClick={signOut}>Sign out</button>
		// </div>
	);
}

const containerStyle = {
	width: 400,
	margin: "20px auto",
};
export default withAuthenticator(Profile);


// // import { Amplify } from 'aws-amplify';
// import '@aws-amplify/ui-react/styles.css';

// import awsExports from './aws-exports';
// Amplify.configure(awsExports);

// export default function App() {
//   return (
    
//   );
// }
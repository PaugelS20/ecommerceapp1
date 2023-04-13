import { Auth } from "aws-amplify";

const checkUser = async (updateUser) => {
	try {
		const userData = await Auth.currentSession();

		console.log("checkUser", userData);
		
        const {idToken: { payload },} = userData;

		const isAuthorized =
			payload["cognito:groups"] &&
			payload["cognito:groups"].includes("Admin");

		updateUser({
			username: payload["cognito:username"],
			isAuthorized,
		});
	} 
    
    catch (err) {
        console.error(err);
        updateUser({});
    }
};
export default checkUser;

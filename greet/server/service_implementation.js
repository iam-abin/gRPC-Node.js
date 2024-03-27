// here we implement greet rpc endpoint on the server side
const pb = require("../proto/greet_pb");

// "call" refers to the communication channel established between a client and a server to invoke remote methods or procedures
exports.greet = async (call) => {
	try {
		const firstName = call.request.getFirstName();
		console.log(`greet was invoked for ${firstName}`);

		const response = new pb.greetResponse();
		response.setResult(`Hello ${firstName}`);

		return response;
	} catch (error) {
		console.error("Error during greet:", error.message);
	}
};

const grpc = require("@grpc/grpc-js");
const { GreetServiceClient } = require("../proto/greet_grpc_pb");
const { GreetRequest } = require("../proto/greet_pb");

const address = "localhost:50051";

const doGreet = async (client) => {
    console.log("doGreet was invoked");

    try {
        const request = new GreetRequest();
        request.setFirstName("abin");

        const response = await client.greet(request); // Pass the entire request object
        console.log("Greet ", response.getResult());
    } catch (error) {
        console.error("Error:", error);
    }
};

function main() {
	const credentials = grpc.ChannelCredentials.createInsecure();
	const client = new GreetServiceClient(address, credentials);
	// codes to call rpc endpoints

	// after doing calls, close the client
	doGreet(client);
	client.close();
}

main();

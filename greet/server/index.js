const grpc = require("@grpc/grpc-js");
const serviceImpl = require('./service_implementation')

const address = "localhost:50051";

async function cleanUp(server) {
	console.log("Cleanup");
	if (server) {
		await server.forceShutdown();
	}
}

async function main() {
    let server;
	try {
		server = new grpc.Server();
		const credentials = grpc.ServerCredentials.createInsecure(); // if no ssl

		process.on("SIGINT", async () => {
			console.log("Caught interrupt signal");
			await cleanUp(server);
		});

		server.bindAsync(address, credentials, ()=>{
            console.log(`server is listening on ${address}`);
        });
        
	} catch (error) {
		console.error("Error:", error.message);
		await cleanUp(server);
	}
}

main();

# SSL

## OpenSSL

Check if you already have OpenSSL installed:

```shell
openssl version
```

### ⚠️ If error

#### `Windows - Chocolatey`

```shell
choco install openssl
```

#### `Otherwise`

Please follow instructions [here](https://github.com/openssl/openssl) to install it.

## Run

### `Linux/MacOS`

```shell
chmod +x ssl.sh
./ssl.sh
```

eg:- chmon +x /scripts/gen.sh

### `Windows - Powershell`

```powershell
.\ssl.ps1
```

or, if you have a `SecurityError`:

```powershell
powershell -ExecutionPolicy unrestricted .\ssl.ps1
```

============== error ================
npm run pb:gen

> grpcnodejs@1.0.0 pb:gen
> ./scripts/gen.sh greet

Missing input file.
/home/abin/brototype/week26/grpcNodeJs/node_modules/grpc-tools/bin/protoc.js:41
    throw error;
    ^

Error: Command failed: /home/abin/brototype/week26/grpcNodeJs/node_modules/grpc-tools/bin/protoc --plugin=protoc-gen-grpc=/home/abin/brototype/week26/grpcNodeJs/node_modules/grpc-tools/bin/grpc_node_plugin -I greet/proto/ --js_out=import_style=commonjs:greet/proto/
Missing input file.

    at ChildProcess.exithandler (node:child_process:419:12)
    at ChildProcess.emit (node:events:513:28)
    at maybeClose (node:internal/child_process:1091:16)
    at Socket.<anonymous> (node:internal/child_process:449:11)
    at Socket.emit (node:events:513:28)
    at Pipe.<anonymous> (node:net:322:12) {
  code: 1,
  killed: false,
  signal: null,
  cmd: '/home/abin/brototype/week26/grpcNodeJs/node_modules/grpc-tools/bin/protoc --plugin=protoc-gen-grpc=/home/abin/brototype/week26/grpcNodeJs/node_modules/grpc-tools/bin/grpc_node_plugin -I greet/proto/ --js_out=import_style=commonjs:greet/proto/'
}

Node.js v18.15.0

======= reason ===========

this error is happpening because in 'gen.sh', 
    inside forloop ,
     second command is is not getting any value if we dont have any other proto file except one file
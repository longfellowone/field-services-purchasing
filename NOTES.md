/\* eslint-disable \*/

protoc -I=./src/proto supply.proto \
--js_out=import_style=commonjs:./src/proto \
--grpc-web_out=import_style=commonjs,mode=grpcwebtext:./src/proto

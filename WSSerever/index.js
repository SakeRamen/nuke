let wss = require('ws').Server;

let server = new wss({port:592});
let clients = new Set();

server.on('connection',function(socket) {
	clients.add(socket);
	socket.on('message',function(message) {
		for (let loc of clients){
			loc.send(message);
		}
	});

	socket.on('close',function(){
		clients.delete(socket);
	});
});
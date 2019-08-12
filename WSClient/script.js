let field = document.getElementById('field'),
	chat = document.getElementById('chat');
let ws = new WebSocket("ws://192.168.10.124:592/");

ws.onmessage = function (m) {
	chat.value = m.data+"\n"+chat.value;
}

ws.onopen = function(){
	field.addEventListener("keydown", function(event){
		if (event.which == 13) {
			ws.send(field.value);
			field.value="";
		}
	});
}
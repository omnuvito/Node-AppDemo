//Conexion con el servidor
$(document).ready(function () {
	window.io = io.connect();

	/*
		Funcion conexion con el servidor: avisa al usuario que se ha conectado al servidor.
		Todas las funciones aca expresadas son funciones que establecen una comunicacion
		con el servidor.

		TODO : Revisar API: on, emit...
	 */
	io.on('connect', function (socket) {
		console.log('Hola, estas conectado al servidor.');
		io.emit('hola?');
	});
});
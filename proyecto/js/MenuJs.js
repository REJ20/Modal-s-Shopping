$(document).ready(function(){
	$('#box-form').submit(function(){
		var txtUser = $('#txt-user').val();
	 	var txtPassword = $('#txt-password').val(); //Declaramos las variables que almacenaran los valores del User

	 	//almacenamos en localStorage

	 	localStorage.setItem('usuario', txtUser);
	 	localStorage.setItem('password', txtPassword);
	});

	var txtUser = localStorage.getItem('usuario');
	var txtPassword = localStorage.getItem('password');

	if (txtUser != null && txtUser != undefined) {
		window.location = '/index.html';
	}

});


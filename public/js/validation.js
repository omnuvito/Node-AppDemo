$(document).ready(function () {
	$( "#r_password" ).change(function() {
		var password = document.getElementById('password').value;
		var r_password = document.getElementById('r_password').value;
		if(password!==r_password){
			document.getElementById('wrong_password').style.color = 'red';
			document.getElementById('wrong_password').innerHTML = 'El campo password no coincide!';
		}else{
			if(password==null && r_password==null){
				document.getElementById('wrong_password').innerHTML = ' ';
			}else{
				document.getElementById('wrong_password').style.color = 'green';
				document.getElementById('wrong_password').innerHTML = 'Bien, Password correcto';
			}
		}
	});
});

var inicioApp = function(){
	var Aceptar = function(){
		//se tienen que extaer los datos
		var usuario = $("#txtUsuario").val();//extraemos los datos que continen el txtUsuario con jquery
		var clave = $("#txtClave").val();//extraemos los datos que continen el txtClave con jquery
		var parametros= "opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&aleatorio"+Math.random();

		$.ajax({
			cache:false,
			type: "POST",//para que no muestre contraseña
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				if(response.respuesta == true){
					alert("Bienvenido");
				}else{
					alert("usuario o clave incorecta(s)");
				}

			},
			error: function(xhr, ajaxOptions, thrownError){

			}
		});
	}
	$("#btnAceptar").on("click", Aceptar);//enciende el evento del boton
}


$(document).ready(inicioApp);
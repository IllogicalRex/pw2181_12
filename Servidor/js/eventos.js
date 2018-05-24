var inicioApp = function(){
	var Aceptar = function(){
		//se tienen que extaer los datos
		var usuario = $("#txtUsuario").val();//extraemos los datos que continen el txtUsuario con jquery
		var clave = $("#txtClave").val();//extraemos los datos que continen el txtClave con jquery
		var parametros= "opc=validaentrada"+"&usuario="+usuario+"&clave="+clave+"&aleatorio"+Math.random();
		console.log('button');
		$.ajax({
			cache:false,
			type: "POST",//para que no muestre contraseña
			dataType: "json",
			url: "php/validaentrada.php",
			data: parametros,
			success: function(response){
				console.log('response');
				console.log(response);
				if(response.respuesta){
					//ocultamos el inicio
					$("#secInicio").hide("slow");
					//aparecemos usuario
					$("#frmUsuario").hide("slow");
					//Cursor en el primer cuadro de texto
					$("#txtNombreUsuario").hide("slow");


					alert("Bienvenido");
				}else{
					alert("usuario o clave incorecta(s)");
				}

			},
			error: function(xhr, ajaxOptions, thrownError){

			}
		});
	}
	var buscarUsuario = function(){
		var usuario = $("#txtNombreUsuario").val();
		var parametros = "opc=buscarUsuario"+"&usuario"+usuario+"&aleatorio"+Math.random();
		if(usuario != ""){
			$.ajax({
			cache:false,
			type: "POST",//para que no muestre contraseña
			dataType: "json",
			url: "php/buscarusuario.php",
			data: parametros,
			success: function(response){
				console.log('response');
				console.log(response);
				if(response.respuesta){
					$('#txtNombre').val(response.nombre);
					$("#txtClaveUsuario").val(response.clave);
				}else
				{
					$("#txtNombre").focus();
				}

			},
			error: function(xhr, ajaxOptions, thrownError){

			}
		});
		}
	}

	varTeclaUsuario = function(tecla){
		if (tecla.which == 13){
			buscarUsuario();
		}
	}
	$("#btnAceptar").on("click", Aceptar);//enciende el evento del boton
	$("#txtNombreUsuario").on("keypress", teclaNombreUsuario);
}


$(document).ready(inicioApp);
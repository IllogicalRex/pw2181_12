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
				if(response.respuesta){
					//ocultamos el inicio
					$("#secInicio").hide("slow");
					//aparecemos usuario
					$("#frmUsuarios").show("slow");
					//Cursor en el primer cuadro de texto


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

	var teclaNombreUsuario = function(tecla){
		if (tecla.which == 13){
			buscarUsuario();
		}
	}
	var Guardar = function(){
		var usuario = $("#txtNombreUsuario").val();
		var nombre = $("#txtNombre").val();
		var clave = $("#txtClaveUsuario").val();

		if(usuario!="" && nombre!="" && clave!= ""){
			$.ajax({
			cache:false,
			type: "POST",//para que no muestre contraseña
			dataType: "json",
			url: "php/guardarusuario.php",
			data: parametros,
			success: function(response){
				if(response.respuesta){
					alert("Datos guardados correctamente");
					$("#frmUsuarios > input").val("")
				}else{
					alert("Ocurrio un error, intente de nuevo mas tarde");
				}
			},
			error: function(xhr, ajaxOptions, thrownError){

			}
		});
		}else{
			alert("Llene todos los campos");
		}
	}
	$("#btnAceptar").on("click", Aceptar);//enciende el evento del boton
	$("#txtNombreUsuario").on("keypress", teclaNombreUsuario);
	$("#btnGuardar").on("click",Guardar);
}


$(document).ready(inicioApp);
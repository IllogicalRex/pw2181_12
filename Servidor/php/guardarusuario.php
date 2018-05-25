<?php
	include 'conexiones.php'
	function guardarusuario(){
		$respuesta = false;
		$usuario=GetSQLValueString($_POST["usuario"], "text");
		$nombre=GetSQLValueString($_POST["nombre"],"text");
		$clave= GetSQLValueString($md5(_POST["usuario"],"text"));
		//conectarnos al servidor de BD
		$con=conecta();
		//$consulta = "select usuario from usuarios where usuario= '".$usuario."' limit 1";
		$consulta=sprintf("select usuario from usuarios where usuarios = %s",$usuario);

		$resConsulta=mysqli_query($con,$consulta);
		$nombre = "";
		$clave = "";
		$consultaGuarda = "";
		//si ya existe en la tabla el usuario
		if(mysqli_num_rows($resConsulta)>0){
			//actualizamos
			$consultaGuarda=sprintf("update usuarios set nombre = %s, clave = %s where usario = %s",$nombre,$clve,$usuario);

		}else{//No existe en la tabla
			$consultaGuarda=sprintf("insert into usuario values(default,%s,%s,%s)",$usuario,$nombre,$clave);
		}
		mysqli_query($con,$consultaGuarda)//ejecuta la consulta 
		if(mysqli_affected_rows()>0){
			$respuesta = true;
		}
		$salidaJSON = array('respuesta' => $respuesta,
							'nombre'    => $nombre,
							'clave'     => $clave);
		//var_dump($salidaJSON);
		print json_decode($salidaJSON);
	}

	$opc=$_POST["opc"];
	switch ($opc) {
		case 'guardarUsuario':
			buscarusuario();
			break;
		
		default:
			# code...
			break;
	}

?>
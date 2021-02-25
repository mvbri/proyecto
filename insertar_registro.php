<!DOCTYPE html>
<head>
    <meta charset=uft-8">
</head>
<body>


<?php

$nom=$_GET["nombre_c"];

$cor=$_GET["correo"];

$nou=$_GET["nombre_u"];

$pas=$_GET["contraseña"];

require("datos_conexion.php");

$conexion=mysqli_connect($db_host, $db_usuario, $db_contra);

if (mysqli_connect_errno()){

    echo "fallo al conectar con la BBDD";

    exit();
}

mysqli_select_db ($conexion, $db_nombre) or die ("no se encuentra la BBDD");

mysqli_set_charset($conexion, "utf8" );

$consulta="INSERT INTO registro (NOMBRE, CORREO, USUARIO ,PASSWORD) VALUES ('$nom', '$cor', '$nou', '$pas')";

$resultados=mysqli_query($conexion, $consulta);


if($resultados==false){

    echo "error en la consulta";

}
else{

    header("location:nuevo_login.html");
}

        

mysqli_close($conexion);

?>

</body>
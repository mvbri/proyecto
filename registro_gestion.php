<!DOCTYPE html>
<head>
    <meta charset=uft-8">
</head>
<body>


<?php

$cod=$_GET["codigo"];

$pro=$_GET["producto"];

$cat=$_GET["categoria"];

$exi=$_GET["existencia"];

$pre=$_GET["precio"];

$uni=$_GET["unidad"];

$ped=$_GET["pedidos"];

require("datos_conexion.php");

$conexion=mysqli_connect($db_host, $db_usuario, $db_contra);

if (mysqli_connect_errno()){

    echo "fallo al conectar con la BBDD";

    exit();
}

mysqli_select_db ($conexion, $db_nombre) or die ("no se encuentra la BBDD");

mysqli_set_charset($conexion, "utf8" );

$consulta="INSERT INTO gestion (CODIGO, NOMBRE, CATEGORIA, EXISTENCIA, PRECIO, UNIDAD, PEDIDOS) VALUES ('$cod', '$pro', '$cat', '$exi', '$pre', '$uni', '$ped')";

$resultados=mysqli_query($conexion, $consulta);


if($resultados==false){

    echo "error en la consulta";

}
else{

    header("location:gestion.html");
    
}

        

mysqli_close($conexion);

?>

</body>
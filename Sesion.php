
<!DOCTYPE HTML>
<html>
<html lang="es">
<head>
    <title>Login</title>
	<meta charset="UTF-8">
	
	
</head>
<body>

<?php

try{

$base=new PDO("mysql:host=localhost; dbname=inventario" , "root" , "");

$base->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$sql= "SELECT * FROM registro WHERE USUARIO= :login AND PASSWORD= :password";

$resultado=$base->prepare($sql);

$login=htmlentities(addslashes($_POST["login"]));

$password=htmlentities(addslashes($_POST["password"]));

$resultado->bindValue("login", $login);

$resultado->bindValue("password", $password);

$resultado->execute();

$numero_registro= $resultado->rowCount();

if($numero_registro!=0){

    header("location:index.html");

}else{

        header("location:nuevo_login.html");
    }
        
        
}catch(Exception $e){

    die("Error: " . $e->getMessage());

}


?>

</body>
</html>
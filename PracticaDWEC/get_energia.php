<?php
require_once 'ConexionBD.php';  
require_once 'Energia.php';

$energia = new Energia();

$datos = $energia->obtenerDatos();

header('Content-Type: application/json');

echo json_encode($datos);
?>

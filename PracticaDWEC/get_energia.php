<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require_once 'ConexionDB.php';  
require_once 'Energia.php';

$energia = new Energia();
$datos = $energia->obtenerDatos();

// Generar XML
$xml = new SimpleXMLElement('<datos/>');
foreach ($datos as $dato) {
    $fuente = $xml->addChild('fuente');
    $fuente->addChild('nombre', $dato['fuente']);
    $fuente->addChild('porcentaje', $dato['porcentaje']);
}

header('Content-Type: application/xml; charset=utf-8');
echo $xml->asXML();
?>

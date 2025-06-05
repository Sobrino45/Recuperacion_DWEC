
<?php
header("Content-Type: application/json");
$conexion = new mysqli("localhost", "root", "", "tienda_videojuegos");

$id_plataforma = isset($_GET["id_plataforma"]) ? intval($_GET["id_plataforma"]) : null;

if ($id_plataforma) {
    $stmt = $conexion->prepare("SELECT * FROM videojuegos WHERE id_plataforma = ?");
    $stmt->bind_param("i", $id_plataforma);
    $stmt->execute();
    $resultado = $stmt->get_result();
} else {
    $resultado = $conexion->query("SELECT * FROM videojuegos");
}

$videojuegos = array();
while ($fila = $resultado->fetch_assoc()) {
    $videojuegos[] = $fila;
}

echo json_encode($videojuegos);
?>

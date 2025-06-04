
<?php
header("Content-Type: text/xml");
$conexion = new mysqli("localhost", "root", "", "tienda_videojuegos");
$resultado = $conexion->query("SELECT * FROM plataformas");
echo "<?xml version='1.0' encoding='UTF-8'?>";
echo "<plataformas>";
while ($fila = $resultado->fetch_assoc()) {
    echo "<plataforma>";
    echo "<id>" . $fila["id"] . "</id>";
    echo "<nombre>" . $fila["nombre"] . "</nombre>";
    echo "</plataforma>";
}
echo "</plataformas>";
?>

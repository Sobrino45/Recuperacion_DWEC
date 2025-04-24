<?php
require_once 'ConexionBD.php'; 

class Energia {
    private $conexion;

    public function __construct() {
        $this->conexion = (new ConexionBD())->getConexion();
    }

    public function obtenerDatos() {
        $consulta = "SELECT fuente, porcentaje FROM uso_energia";
        $resultado = $this->conexion->query($consulta);
        $datos = [];

        if ($resultado) {
            while ($row = $resultado->fetch_assoc()) {
                $datos[] = $row;
            }
        }

        return $datos;
    }
}
?>

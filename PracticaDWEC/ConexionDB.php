<?php
class ConexionBD {
    private $host = 'localhost';
    private $usuario = 'root';
    private $contrasena = 'root'; 
    private $bd = 'sobrinoj_general';
    private $conexion;

    public function __construct() {
        $this->conexion = new mysqli($this->host, $this->usuario, $this->contrasena, $this->bd);
        if ($this->conexion->connect_error) {
            die("Conexión fallida: " . $this->conexion->connect_error);
        }
    }

    public function getConexion() {
        return $this->conexion;
    }
}
?>

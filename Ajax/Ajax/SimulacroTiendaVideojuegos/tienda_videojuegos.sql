
CREATE DATABASE IF NOT EXISTS tienda_videojuegos;
USE tienda_videojuegos;

CREATE TABLE IF NOT EXISTS plataformas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS videojuegos (
    id INT AUTO_INCREMENT PRIMARY KEY,
    id_plataforma INT,
    titulo VARCHAR(100) NOT NULL,
    precio FLOAT NOT NULL,
    sinopsis TEXT,
    imagen VARCHAR(100),
    FOREIGN KEY (id_plataforma) REFERENCES plataformas(id)
);

INSERT INTO plataformas (nombre) VALUES ('PC'), ('PS5'), ('Xbox Series X');

INSERT INTO videojuegos (id_plataforma, titulo, precio, sinopsis, imagen) VALUES
(1, 'Elden Ring', 59.99, 'Un juego de rol de acción en mundo abierto.', 'eldenring.jpg'),
(2, 'Final Fantasy XVI', 69.99, 'Una historia épica en un mundo de fantasía oscura.', 'ffxvi.jpg'),
(3, 'Halo Infinite', 49.99, 'El Jefe Maestro regresa en esta nueva entrega de Halo.', 'halo_infinite.jpg');

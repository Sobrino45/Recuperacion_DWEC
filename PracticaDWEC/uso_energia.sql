-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 23-02-2025 a las 22:45:43
-- Versión del servidor: 8.0.41-0ubuntu0.24.04.1
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `sobrinoj_general`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `uso_energia`
--


CREATE TABLE `uso_energia` (
  `id` int NOT NULL,
  `fuente` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `porcentaje` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `uso_energia`
--

INSERT INTO `uso_energia` (`id`, `fuente`, `porcentaje`) VALUES
(1, 'Energía Solar', 25.3),
(2, 'Energía Eólica', 30.7),
(3, 'Hidroelectricidad', 20.1),
(4, 'Biomasa', 15.2),
(5, 'Nuclear', 8.7);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `uso_energia`
--
ALTER TABLE `uso_energia`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `uso_energia`
--
ALTER TABLE `uso_energia`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

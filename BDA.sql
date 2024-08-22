-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3307
-- Tiempo de generación: 27-05-2024 a las 21:33:54
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tiendaa`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `agregar`
--

CREATE TABLE `agregar` (
  `id` int(10) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `imagen` varchar(200) NOT NULL,
  `descripcion` varchar(300) NOT NULL,
  `precio` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `agregar`
--

INSERT INTO `agregar` (`id`, `nombre`, `imagen`, `descripcion`, `precio`) VALUES
(1, 'pantalon', 'https://rivercaves.com/wp-content/uploads/2022/05/Pantalon-Cargo-Negro-River-Caves.jpg', 'es negro', 456789),
(2, 'Flor', 'https://img.freepik.com/foto-gratis/primer-disparo-flor-morada_181624-25863.jpg', 'Flor morada', 30),
(6, 'tarro', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmSvvDBTCctabf23zBlnhl-sn5wLr3fdPITMrquvNr2Q&s', 'tarro', 50);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(10) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `apellido` varchar(200) NOT NULL,
  `correo` varchar(200) NOT NULL,
  `telefono` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_bin;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `nombre`, `apellido`, `correo`, `telefono`) VALUES
(1, 'Nicoll', 'Ojeda', 'nicoll.ojeda@uniminuto.edu.co', '3192261875'),
(2, 'nicoll', 'ojeda', 'nicol@gmail.com', '31900000');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `agregar`
--
ALTER TABLE `agregar`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `agregar`
--
ALTER TABLE `agregar`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;


-- phpMyAdmin SQL Dump
-- version 4.8.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 15-02-2021 a las 08:22:50
-- Versión del servidor: 10.1.34-MariaDB
-- Versión de PHP: 7.2.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `inventario`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gestion`
--

CREATE TABLE `gestion` (
  `CODIGO` varchar(15) NOT NULL,
  `NOMBRE` varchar(20) NOT NULL,
  `CATEGORIA` varchar(20) NOT NULL,
  `EXISTENCIA` varchar(7) NOT NULL,
  `PRECIO` varchar(12) NOT NULL,
  `UNIDAD` varchar(9) NOT NULL,
  `PEDIDOS` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `gestion`
--

INSERT INTO `gestion` (`CODIGO`, `NOMBRE`, `CATEGORIA`, `EXISTENCIA`, `PRECIO`, `UNIDAD`, `PEDIDOS`) VALUES
('1245455', '', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '30', '1$', '100x1', '4'),
('1245455', 'harina pan', '1', '30', '1$', '100x1', '4');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `registro`
--

CREATE TABLE `registro` (
  `ID` int(11) NOT NULL,
  `NOMBRE` varchar(35) NOT NULL,
  `CORREO` varchar(25) NOT NULL,
  `USUARIO` varchar(20) NOT NULL,
  `PASSWORD` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `registro`
--

INSERT INTO `registro` (`ID`, `NOMBRE`, `CORREO`, `USUARIO`, `PASSWORD`) VALUES
(39, 'Angel', 'Angel01@gmail.com', 'Angel01', '1234');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `registro`
--
ALTER TABLE `registro`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `registro`
--
ALTER TABLE `registro`
  MODIFY `ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

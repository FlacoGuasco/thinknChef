CREATE DATABASE  IF NOT EXISTS `thinknChef` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `thinknChef`;
-- MySQL dump 10.13  Distrib 8.0.36, for Linux (x86_64)
--
-- Host: localhost    Database: thinknChef
-- ------------------------------------------------------
-- Server version	8.0.36-0ubuntu0.22.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `estaciones`
--

DROP TABLE IF EXISTS `estaciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `estaciones` (
  `id_estacion` int NOT NULL AUTO_INCREMENT,
  `nom_estacion` varchar(15) NOT NULL,
  PRIMARY KEY (`id_estacion`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estaciones`
--

LOCK TABLES `estaciones` WRITE;
/*!40000 ALTER TABLE `estaciones` DISABLE KEYS */;
INSERT INTO `estaciones` VALUES (1,'verano'),(2,'invierno'),(3,'todas');
/*!40000 ALTER TABLE `estaciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingrediente_menu`
--

DROP TABLE IF EXISTS `ingrediente_menu`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingrediente_menu` (
  `id_menu` int NOT NULL,
  `id_ingrediente` int NOT NULL,
  `cant_porcion` int NOT NULL,
  PRIMARY KEY (`id_menu`,`id_ingrediente`),
  KEY `fk_ingrediente_menu_idx` (`id_ingrediente`),
  KEY `fk_id_menu_idx` (`id_menu`),
  CONSTRAINT `fk_id_ingrediente` FOREIGN KEY (`id_ingrediente`) REFERENCES `ingredientes` (`id_ingrediente`),
  CONSTRAINT `fk_id_menu` FOREIGN KEY (`id_menu`) REFERENCES `menus` (`id_menu`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingrediente_menu`
--

LOCK TABLES `ingrediente_menu` WRITE;
/*!40000 ALTER TABLE `ingrediente_menu` DISABLE KEYS */;
INSERT INTO `ingrediente_menu` VALUES (1,3,3),(1,29,85),(1,63,60),(2,3,1),(2,4,50),(2,21,5),(2,43,2),(2,53,20),(2,54,120),(2,62,25),(3,3,1),(3,4,50),(3,21,5),(3,43,2),(3,52,120),(3,53,20),(3,62,25);
/*!40000 ALTER TABLE `ingrediente_menu` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ingredientes`
--

DROP TABLE IF EXISTS `ingredientes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `ingredientes` (
  `id_ingrediente` int NOT NULL AUTO_INCREMENT,
  `nom_ingrediente` varchar(50) NOT NULL,
  `id_um` int NOT NULL COMMENT 'Se refiere a la unidad de medida en que el se mide el ingrediente',
  PRIMARY KEY (`id_ingrediente`),
  UNIQUE KEY `nom_ingrediente_UNIQUE` (`nom_ingrediente`),
  KEY `fk_id_um_idx` (`id_um`),
  CONSTRAINT `fk_id_um` FOREIGN KEY (`id_um`) REFERENCES `unidad_medidas` (`id_um`)
) ENGINE=InnoDB AUTO_INCREMENT=195 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ingredientes`
--

LOCK TABLES `ingredientes` WRITE;
/*!40000 ALTER TABLE `ingredientes` DISABLE KEYS */;
INSERT INTO `ingredientes` VALUES (1,'pan lactal',3),(2,'queso untable',1),(3,'huevo',3),(4,'tomate',1),(5,'yogurt',1),(6,'cereales',1),(7,'manteca',1),(8,'frutos secos',1),(9,'frutas_grs',1),(10,'frutas_unidades',3),(11,'azucar',1),(12,'harina',1),(13,'esencia de vainilla',8),(14,'avena',1),(15,'cafe',5),(16,'yerba',1),(17,'agua',2),(18,'leche',2),(19,'papas',1),(20,'zanahoria',1),(21,'aceite',2),(22,'ajo',3),(23,'carne vacuna',1),(24,'cebolla',1),(25,'pure de tomate',2),(26,'laurel',3),(27,'morron',1),(28,'lentejas',1),(29,'arroz',1),(30,'fideos',1),(31,'berenjena',1),(32,'caldo de verdura',2),(33,'queso rallado',1),(34,'masa para tarta',3),(35,'masa para empanadas',3),(36,'ricota',1),(37,'acelga',1),(38,'queso cremoso',1),(39,'zapallitos',1),(40,'carne molida',1),(41,'pollo',1),(42,'aceitunas',1),(43,'vinagre',2),(44,'ñoquis',1),(45,'crema de leche',2),(46,'cebolla de verdeo',1),(47,'masa para lasagna',1),(48,'jamon cocido',1),(49,'levadura',1),(50,'muzzarella',1),(51,'caldo de gallina',2),(52,'bife de nalga',1),(53,'pan rallado',1),(54,'bife de pollo',1),(55,'batatas',1),(56,'provenzal',1),(57,'patamuslo de pollo',1),(58,'espinaca',1),(59,'zapallo cabutia',3),(60,'choclo cremoso',1),(61,'polenta',1),(62,'lechuga',1),(63,'atun',1),(64,'flan',1),(65,'frutillas',1),(66,'dulce de leche',1);
/*!40000 ALTER TABLE `ingredientes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `menus`
--

DROP TABLE IF EXISTS `menus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `menus` (
  `id_menu` int NOT NULL AUTO_INCREMENT,
  `nom_menu` varchar(50) NOT NULL,
  `receta` varchar(1000) DEFAULT NULL,
  `id_estacion` int NOT NULL,
  `id_tipo_comida` int NOT NULL,
  PRIMARY KEY (`id_menu`),
  UNIQUE KEY `nom_menu_UNIQUE` (`nom_menu`),
  KEY `fk_id_estacion_idx` (`id_estacion`),
  KEY `fk_id_tipo_comida_idx` (`id_tipo_comida`),
  CONSTRAINT `fk_id_estacion` FOREIGN KEY (`id_estacion`) REFERENCES `estaciones` (`id_estacion`),
  CONSTRAINT `fk_id_tipo_comida` FOREIGN KEY (`id_tipo_comida`) REFERENCES `tipo_comidas` (`id_tipo_comida`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `menus`
--

LOCK TABLES `menus` WRITE;
/*!40000 ALTER TABLE `menus` DISABLE KEYS */;
INSERT INTO `menus` VALUES (1,'arroz con atún y huevo',NULL,1,1),(2,'milanesa de pollo c/ ensalada mixta',NULL,1,1),(3,'milanesa de carne c/ ensalada mixta',NULL,1,1),(4,'tarta de jamon y queso',NULL,1,1),(5,'ensalada cesar',NULL,1,1),(6,'polenta c/ tuco y queso',NULL,2,1),(7,'cabutia relleno al horno',NULL,2,1),(8,'pizza especial',NULL,3,1),(9,'tarta de espinaca y huevo',NULL,3,1),(10,'milanesa de carne c/ pure',NULL,3,1),(11,'milanesa de pollo c/ batatas al horno',NULL,2,1),(12,'pastel de papa',NULL,2,1),(13,'yogurt c/ cereales',NULL,3,3),(14,'hotcakes c/ frutas',NULL,3,3),(15,'frutas a elección',NULL,3,3),(16,'cafe c/ leche',NULL,3,4),(17,'mate cocido',NULL,3,4),(18,'te',NULL,3,4),(19,'flan c/ dulce de leche',NULL,3,2),(20,'frutillas c/ crema',NULL,3,2);
/*!40000 ALTER TABLE `menus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modulos`
--

DROP TABLE IF EXISTS `modulos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `modulos` (
  `id_modulo` int NOT NULL AUTO_INCREMENT,
  `modulo` varchar(100) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_modulo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modulos`
--

LOCK TABLES `modulos` WRITE;
/*!40000 ALTER TABLE `modulos` DISABLE KEYS */;
/*!40000 ALTER TABLE `modulos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permisos`
--

DROP TABLE IF EXISTS `permisos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permisos` (
  `id_permiso` int NOT NULL AUTO_INCREMENT,
  `id_usuario` int NOT NULL,
  `id_modulo` int NOT NULL,
  `c` int NOT NULL DEFAULT '0',
  `r` int NOT NULL DEFAULT '0',
  `u` int NOT NULL DEFAULT '0',
  `d` int NOT NULL DEFAULT '0',
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_permiso`),
  KEY `fk_usuario_permiso_idx` (`id_usuario`),
  KEY `fk_modulo_permiso_idx` (`id_modulo`),
  CONSTRAINT `fk_modulo_permiso` FOREIGN KEY (`id_modulo`) REFERENCES `modulos` (`id_modulo`),
  CONSTRAINT `fk_usuario_permiso` FOREIGN KEY (`id_usuario`) REFERENCES `usuarios` (`id_usuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permisos`
--

LOCK TABLES `permisos` WRITE;
/*!40000 ALTER TABLE `permisos` DISABLE KEYS */;
/*!40000 ALTER TABLE `permisos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tipo_comidas`
--

DROP TABLE IF EXISTS `tipo_comidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tipo_comidas` (
  `id_tipo_comida` int NOT NULL AUTO_INCREMENT,
  `descripcion` varchar(20) NOT NULL,
  PRIMARY KEY (`id_tipo_comida`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tipo_comidas`
--

LOCK TABLES `tipo_comidas` WRITE;
/*!40000 ALTER TABLE `tipo_comidas` DISABLE KEYS */;
INSERT INTO `tipo_comidas` VALUES (1,'comida'),(2,'postre'),(3,'snack'),(4,'infusion');
/*!40000 ALTER TABLE `tipo_comidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `unidad_medidas`
--

DROP TABLE IF EXISTS `unidad_medidas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `unidad_medidas` (
  `id_um` int NOT NULL AUTO_INCREMENT,
  `um` varchar(10) NOT NULL COMMENT 'Se refiere a la unidad de medida en que el se mide el ingrediente',
  PRIMARY KEY (`id_um`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `unidad_medidas`
--

LOCK TABLES `unidad_medidas` WRITE;
/*!40000 ALTER TABLE `unidad_medidas` DISABLE KEYS */;
INSERT INTO `unidad_medidas` VALUES (1,'grs'),(2,'cm3'),(3,'u'),(4,'lts'),(5,'a gusto'),(6,'ml'),(7,'kg'),(8,'gotas');
/*!40000 ALTER TABLE `unidad_medidas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id_usuario` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(200) NOT NULL,
  `fecha_creacion` datetime NOT NULL,
  `fecha_modificacion` datetime DEFAULT NULL,
  PRIMARY KEY (`id_usuario`),
  UNIQUE KEY `nombre_UNIQUE` (`usuario`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-20 14:15:28

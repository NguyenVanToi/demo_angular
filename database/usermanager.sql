-- MySQL dump 10.13  Distrib 5.7.18, for Linux (x86_64)
--
-- Host: localhost    Database: managerUser
-- ------------------------------------------------------
-- Server version	5.7.18-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `User`
--

DROP TABLE IF EXISTS `User`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `User` (
  `id` varchar(100) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `age` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `User`
--

LOCK TABLES `User` WRITE;
/*!40000 ALTER TABLE `User` DISABLE KEYS */;
INSERT INTO `User` VALUES ('23D94455-4EE4-A86C-2F44-6D6AD34EC8','Jognson','Jhone@123.com',21),('23D94455-4EE4-A86C-2F44-6D6AD34EC8F3','Brish','interdum@Crasdictumultricies.com',88),('23D94455-4EE4-A86C-2F44-6D6AD34EC99','aligato','vuive@123.com',99),('39305B6E-7EAB-D86B-F243-0B82712BE3E2','Jane','sit.amet.faucibus@arcu.edu',32),('6334A448-B057-13B3-C876-D8A452C4DFE1','nam','tristique.ac.eleifend@mattis.ca',22),('6334A448-B057-13B3-C876-D8A452C4DGHI','Smith','Smith@gmail.com',67),('878B0AD6-2DA9-FAE0-6AB8-A14A55AC81BE','Adam','pellentesque.massa.lobortis@ultricessitamet.net',22),('90E88CD5-FF29-EB0C-FB95-C948B9EB3F96','Leo','Donec.dignissim.magna@nec.net',44),('A5CFAD5A-943D-F3C8-E6C5-879762C6B46F','manh','nulla@amet.org',22),('B9E3A5F0-B2A5-A377-A009-6ADE2E83FF30','Acton','Vivamus@duisemper.com',21),('EA383C08-C4D5-ED96-D290-738B2B63C411','Lead','Donec.felis.orci@liberoDonecconsectetuer.org',21),('F7F62353-14A9-BC41-74E8-BBE42B0A3942','Vinh','arcu.Morbi@nonenimMauris.com',23);
/*!40000 ALTER TABLE `User` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'managerUser'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-07 14:34:49

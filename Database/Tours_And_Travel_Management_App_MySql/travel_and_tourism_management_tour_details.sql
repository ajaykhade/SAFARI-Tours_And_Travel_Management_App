-- MySQL dump 10.13  Distrib 8.0.31, for Win64 (x86_64)
--
-- Host: localhost    Database: travel_and_tourism_management
-- ------------------------------------------------------
-- Server version	8.0.31

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
-- Table structure for table `tour_details`
--

DROP TABLE IF EXISTS `tour_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tour_details` (
  `tour_id` bigint NOT NULL AUTO_INCREMENT,
  `activities` varchar(30) DEFAULT NULL,
  `booking_amount` double NOT NULL,
  `destination` varchar(30) NOT NULL,
  `max_seats` int DEFAULT NULL,
  `source` varchar(30) NOT NULL,
  `tour_detail_info` varchar(50) DEFAULT NULL,
  `tour_end_date` date NOT NULL,
  `tour_name` varchar(30) NOT NULL,
  `tour_start_date` date NOT NULL,
  `tour_type` varchar(255) DEFAULT NULL,
  `transportation_mode` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`tour_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tour_details`
--

LOCK TABLES `tour_details` WRITE;
/*!40000 ALTER TABLE `tour_details` DISABLE KEYS */;
INSERT INTO `tour_details` VALUES (1,'Snow Rafting, treking etc',30001,'Kashmir',18,'Mumbai','You can visit beautiful Kashmir','2023-04-05','Explore Kashmir','2023-03-30','DOMESTIC','TRAIN'),(2,'Treking',4000,'Pune',46,'Pune','We see Forts in Pune region','2023-03-31','Historical Pune','2023-03-30','HOLIDAY','BUS'),(3,'Skuba Diving, F1 Racing, Golf',100000,'Dubai',19,'Pune','You can visit Luxurious Dubai','2023-05-26','Palm Jumeirah Dubai','2023-04-26','INTERNATIONAL','FLIGHT');
/*!40000 ALTER TABLE `tour_details` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-13 15:01:11

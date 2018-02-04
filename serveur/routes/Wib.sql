-- phpMyAdmin SQL Dump
-- version 4.7.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Dec 10, 2017 at 07:43 PM
-- Server version: 10.1.28-MariaDB
-- PHP Version: 7.1.11
/*
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Wib`
--

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE `Comment` (
  `username` varchar(200) NOT NULL,
  `domain_name` varchar(200) NOT NULL,
  `text` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Mark`
--

CREATE TABLE `Mark` (
  `username` varchar(200) NOT NULL,
  `domain_name` varchar(200) NOT NULL,
  `object` varchar(50) NOT NULL,
  `note` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `User`
--

CREATE TABLE `User` (
  `username` varchar(200) NOT NULL,
  `password` varchar(200) NOT NULL,
  `email` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `Website`
--

CREATE TABLE `Website` (
  `domain_name` varchar(200) NOT NULL, 
 `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

---Site principale
CREATE TABLE `Site` (
  `domain_name` varchar(200) NOT NULL, 
 `name` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Comment`
--
ALTER TABLE `Comment`
  ADD KEY `fk_user_comment` (`username`),
  ADD KEY `fk_site_comment` (`domain_name`);

--
-- Indexes for table `Mark`
--
ALTER TABLE `Mark`
  ADD KEY `fk_site_mark` (`domain_name`),
  ADD KEY `fk_user_mark` (`username`);

--
-- Indexes for table `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`username`),
  ADD UNIQUE KEY `password` (`password`,`email`);

--
-- Indexes for table `Website`
--
ALTER TABLE `Website`
Add `description` varchar(200)
  ADD PRIMARY KEY (`domain_name`);
--
-- Constraints for dumped tables
--

--
-- Constraints for table `Comment`
--
ALTER TABLE `Comment`
  ADD CONSTRAINT `fk_site_comment` FOREIGN KEY (`domain_name`) REFERENCES `Website` (`domain_name`),
  ADD CONSTRAINT `fk_user_comment` FOREIGN KEY (`username`) REFERENCES `User` (`username`);

--
-- Constraints for table `Mark`
--
ALTER TABLE `Mark`
  ADD CONSTRAINT `fk_site_mark` FOREIGN KEY (`domain_name`) REFERENCES `Website` (`domain_name`),
  ADD CONSTRAINT `fk_user_mark` FOREIGN KEY (`username`) REFERENCES `User` (`username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

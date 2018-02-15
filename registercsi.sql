-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Jan 29, 2018 at 11:36 AM
-- Server version: 10.1.19-MariaDB
-- PHP Version: 5.6.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `form`
--

-- --------------------------------------------------------

--
-- Table structure for table `registercsi`
--

CREATE TABLE `registercsi` (
  `S.NO` int(255) NOT NULL,
  `NAME` varchar(90) NOT NULL,
  `GENDER` varchar(20) NOT NULL,
  `EMAILID` varchar(100) NOT NULL,
  `MOBILE` varchar(11) NOT NULL,
  `COLLEGE` varchar(200) NOT NULL,
  `DEPARTMENT` varchar(150) NOT NULL,
  `CITY` varchar(100) NOT NULL,
  `EVENTS` varchar(255) NOT NULL,
  `WORKSHOP` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `registercsi`
--
ALTER TABLE `registercsi`
  ADD PRIMARY KEY (`S.NO`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `registercsi`
--
ALTER TABLE `registercsi`
  MODIFY `S.NO` int(255) NOT NULL AUTO_INCREMENT;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

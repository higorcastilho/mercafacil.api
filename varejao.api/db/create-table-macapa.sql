CREATE DATABASE macapadb;
use macapadb;

CREATE TABLE `contact`(
	`id` int unsigned NOT NULL AUTO_INCREMENT,
	`name` varchar(200) NOT NULL,
	`cellphone` varchar (20) NOT NULL,
	PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- insert into `contact`(`name`, `cellphone`) values
-- ('João', '223333453')
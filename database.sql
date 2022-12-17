create database store;

use store;

CREATE TABLE user (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(50) NOT NULL,
   PRIMARY KEY ( id )
);

CREATE TABLE product (
	id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(50) NOT NULL,
    sku VARCHAR(10) NOT NULL UNIQUE,
	category VARCHAR(50),
	price DECIMAL(10,2),
	description TEXT,
    PRIMARY KEY ( id )
);

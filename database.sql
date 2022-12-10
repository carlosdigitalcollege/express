create database store;

use store;

create table user (
   id INT NOT NULL AUTO_INCREMENT,
   name VARCHAR(50) NOT NULL,
   email VARCHAR(50) NOT NULL UNIQUE,
   password VARCHAR(50) NOT NULL,
   PRIMARY KEY ( id )
);
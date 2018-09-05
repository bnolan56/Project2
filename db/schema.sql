DROP DATABASE IF EXISTS test;
CREATE DATABASE test;

USE test;

CREATE TABLE tester(
 name TEXT,
 rating DOUBLE,
 address TEXT,
 city TEXT,
 state TEXT,
 zip INT,
 phone TEXT,
 latitude DOUBLE,
 longitude DOUBLE,
 website TEXT,
id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY

);		

SELECT*FROM tester;

brewery database!!!
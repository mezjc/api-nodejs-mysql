CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee (
  id INT(11) NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) DEFAULT NULL,
  salary INT DEFAULT NULL,
  PRIMARY KEY (id)
);

DESCRIBE employee;

INSERT INTO employee VALUES 
(1, 'John Doe', 1000),
(2, 'Jane Doe', 2000),
(3, 'John Smith', 3000),
(4, 'Jane Smith', 4000);

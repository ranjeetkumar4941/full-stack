CREATE DATABASE IF NOT EXISTS app ;
USE app;

create table student (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(50),
    age INT,
    city VARCHAR(50)
);
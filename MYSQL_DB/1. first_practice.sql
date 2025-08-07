CREATE DATABASE college; -- we use it to create our database 
USE college; -- we use it to tell that which database we are going to use. 
create database company; -- SQL is not a Case Sensitive language 
drop database CompaNy; -- use it delete database

CREATE TABLE student( -- creating a table in DB
Id INT,
name VARCHAR(30),
age INT
);

INSERT INTO student VALUES -- inserting values into our table
(101,"John", 21),
(102,"Bob",19);

SELECT * FROM student; -- to view data in our table

-- DB Queries
SHOW TABLES; -- TO SHOW ALL TABLE IN OUR DB
SHOW DATABASES; -- TO SHOW ALL DBs

CREATE DATABASE instagram;
CREATE DATABASE IF NOT EXISTS INSTAGRAM; -- if DB exist then it will not create new DB or error, only generates warning 

DROP DATABASE instagram;
DROP DATABASE IF EXISTS instagram; -- IT IS SAME BUT FOR REMOVING OR DELETING DBs
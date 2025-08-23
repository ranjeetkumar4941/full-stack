CREATE DATABASE IF NOT EXISTS college;
USE college;

CREATE TABLE Teacher (
id INT,
name VARCHAR(30),
subject VARCHAR(30),
salary INT 
);

INSERT INTO Teacher VALUES
(23, "ajay", "math",50000),
(47, "bharat", "english", 60000),
(18, "chetan","chemistry", 45000),
(9, "divya", "physics", 75000);

SELECT * FROM teacher;

-- select teachers whose salary is more than 55k 
SELECT * FROM teacher 
WHERE salary > 55000;

-- rename salary column to ctc
ALTER TABLE teacher
CHANGE COLUMN salary ctc INT;

SET SQL_SAFE_UPDATES = 0;

-- update salary of all teachers by 25%
UPDATE teacher 
SET ctc = ctc + ctc*25/100;

-- add new column and set default value to gurgaon
ALTER TABLE teacher 
ADD COLUMN city VARCHAR(30) DEFAULT "Gurgaon";

-- delete the salary column
ALTER TABLE teacher 
DROP COLUMN ctc;
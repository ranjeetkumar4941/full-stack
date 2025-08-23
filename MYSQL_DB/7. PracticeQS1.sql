-- QS1

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

-- QS2

CREATE TABLE student (
roll_no INT,
name VARCHAR(30),
city VARCHAR(30),
marks int
);

INSERT INTO student VALUES
(110, "adam", "Delhi", 76),
(108, "bob", "Mumbai", 65),
(124, "casey", "Pune", 94),
(112, "duke", "Pune", 80);

SELECT * FROM student;
-- select student who scored 75+
SELECT * FROM student
WHERE marks > 75;

-- find all cities name
SELECT DISTINCT city FROM student;

SELECT city FROM student
GROUP BY city;

-- find maximum marks of students from each city
SELECT city, MAX(marks) FROM student
GROUP BY city;

-- find the average of class
SELECT AVG(marks) FROM student;

-- add a new column grade and assign grade such that :
-- above 80, grade O
-- between 70-80, grade A
-- between 70-60, grade B
ALTER TABLE student
ADD COLUMN grade VARCHAR(2);

UPDATE student 
SET grade = "O"
WHERE marks > 80;

UPDATE student 
SET grade = "A"
WHERE 80 >= marks AND marks >  70;

UPDATE student 
SET grade = "B"
WHERE 70 >= marks AND marks > 60;
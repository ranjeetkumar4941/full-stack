CREATE DATABASE college;
USE college;

CREATE TABLE student (
rollno INT PRIMARY KEY,
name VARCHAR(30),
age TINYINT,
teacherid INT
);

CREATE TABLE teacher(
id INT PRIMARY KEY,
name VARCHAR(30),
subject VARCHAR(30)
);

INSERT INTO teacher VALUES
(101, 'SANTOSH', 'HINDI'),
(102, 'ROHAN', 'ENGLISH'),
(103, 'JOHN', 'MATH');

INSERT INTO student VALUES 
(2201, 'bob', 17, 102),
(2202, 'micheal', 15, 103),
(2204, 'jack', 16, 102),
(2205, 'tony', 14, 101);

SELECT * FROM teacher;
SELECT * FROM student;

-- Where clause
SELECT name, age FROM student
WHERE age>=15;

SELECT name, age FROM student
WHERE age + 1 =15;

-- AND operator
SELECT name, age FROM student
WHERE age>=15 AND teacherid = 103;

-- OR operator
SELECT * FROM student
WHERE age < 15 OR teacherid = 103;

-- BETWEEN operator
SELECT name, age FROM student
WHERE age BETWEEN 15 AND 17;

-- IN operator
SELECT name, age FROM student
WHERE age IN (10,12,14,16);

-- NOT operator
SELECT name, age FROM student
WHERE age NOT IN (10,12,14,16); 
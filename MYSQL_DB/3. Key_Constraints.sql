CREATE DATABASE college;
USE college;
-- creating foreign key
CREATE TABLE student (
rollno INT PRIMARY KEY,
name VARCHAR(30),
age TINYINT,
teacherid INT,
FOREIGN KEY (teacherid) REFERENCES teacher(id) -- here, teacherid is a foreign key that references the id column in the teacher table
);

-- creating primary key
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

select * from student where teacherid=103;
select rollno,name from student where age>=15;
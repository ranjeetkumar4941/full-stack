CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

CREATE TABLE user (
Id INT UNIQUE, 
age INT,
name VARCHAR(30) NOT NULL, 
email VARCHAR(50),
followers INT DEFAULT 100,
following INT
);

INSERT INTO user VALUES
(1,23,"John","john@gmail.in",20,34),
(2,19,"ketki","ketki@yahoo.com",343, 462),
(3, 21, "prasad", "prasad@gmaol.in", 234,556);

INSERT INTO user (id, age, name, followers, following) VALUES
(4, 23, 'bob', 17, 102),
(5, 19, 'micheal', 15, 103),
(6, 17, 'jack', 16, 102),
(7, 16, 'tony', 14, 101);

select * from user;

-- limit clause
select * from user
limit 5;-- it sets limit for rows

select * from user 
where age>20
limit 2;

-- ORDER BY clause
select * from user 
order by name asc;
select * from user 
order by name desc;
select * from user 
order by name; -- by default it sorts in Ascending order

select * from user 
order by followers asc;

-- Group By clause: It groups rows that have same values
select age, max(followers) from user -- we can't write other columns name 
group by age;

select age, count(age) from user
group by age;

-- Having clause: it is similar to where for apllying condition but, only for groups and for it grouping are necessary.
select age, max(followers) 
from user
group by age
having max(followers) > 100;
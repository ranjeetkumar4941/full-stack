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

-- Aggregate function: to perform calculation on a set of value and return single value
-- min(): to find minimum value
select min(followers) from user;

-- max(): to find max value
select max(following) from user;

-- count(): to count the number of rows
select count(following) from user
where following > 100;

-- sum(): to add all value of a column
select sum(followers) from user;

-- avg(): to get average of a column
select avg(age) from user;

select name, avg(age) from user; -- we can't write any other column with aggregate func. for it, we use group by clause.
select max(age), avg(age) from user; -- we can write more aggregate func at a time.

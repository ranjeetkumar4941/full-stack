CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

-- CREATE COMMAND: used for create table or DB
-- constraints- unique, not null, ceck, default- set default value, if value doesn't exist
CREATE TABLE user (
Id INT UNIQUE, -- 'unique- column value should be unique.'
age INT,
name VARCHAR(30) NOT NULL, -- value can't be null
email VARCHAR(50),
followers INT,
following INT,
CONSTRAINT CHECK (age>=18) -- sets limit for a column
);

-- INSERT COMMAND: used for insert data into table
INSERT INTO user VALUES
(1,23,"John","john@gmail.in",20,34),
(2,19,"ketki","ketki@yahoo.com",343, 462),
(3, 21, "prasad", "prasad@gmaol.in", 234,556);

INSERT INTO user (id, age, name) VALUES -- We can insert value in a particular column but it should follow constraints 
(4, 27, "Anurag");

-- SELECT COMMAND: used for view our data
SELECT * FROM user;-- it views total data of table
SELECT id, name FROM user;-- it view only selected column data from table

-- UPDATE command : used to update values of row
UPDATE user 
SET followers = 110
WHERE id = 1;

SET SQL_SAFE_UPDATES = 0;

-- DELETE command : used to delete existing rows. 
DELETE FROM USER 
WHERE FOLLOWERS < 100;

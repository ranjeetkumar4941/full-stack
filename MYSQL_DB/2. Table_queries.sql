CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;

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

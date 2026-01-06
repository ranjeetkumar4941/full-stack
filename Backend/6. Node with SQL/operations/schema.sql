-- If we have more query then we used sql files to write our queries
CREATE TABLE IF NOT EXISTS user(
    id varchar(100) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);
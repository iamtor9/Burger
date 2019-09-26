CREATE DATABASE burger_db;

USE burger_db;


-- CREATE TABLE burgers (
--     id INT NOT NULL AUTO_INCREMENT,
--     burger_name VARCHAR(50) NULL,
--     devoured BOOLEAN,
--     PRIMARY KEY: id

-- )

ALTER TABLE burgers CHANGE COLUMN createdAt createdAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;
ALTER TABLE burgers CHANGE COLUMN updatedAt updatedAt datetime NOT NULL DEFAULT CURRENT_TIMESTAMP;

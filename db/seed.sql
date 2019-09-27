--third time is a charm?
-- use the burger db!!!!!! duh.
-- insert into burgers, then input values
USE burger_db;

INSERT INTO burgers (name, devoured, createdAt, updatedAt) 
VALUES ("bae burger", false, CURRENT_TIMESTAMP,CURRENT_TIMESTAMP);

INSERT INTO burgers (name, devoured, createdAt, updatedAt) 
VALUES ("juicy lucy", false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO burgers (name, devoured, createdAt, updatedAt) 
VALUES ("Bomb burger", true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO burgers (name, devoured, createdAt, updatedAt) 
VALUES ("spooky boo burger", false, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO burgers (name, devoured, createdAt, updatedAt) 
VALUES ("baller burger", true, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);


--second code attmpt
-- INSERT INTO burgers (
--     "burger_name",
--     "devoured",
-- )
-- -- referenced other ways to create seeds sql, between google and recent assignments
-- -- and messing around until it clicked. so hoping this works!
-- VALUES
-- ("juicy lucy", false),
-- ("bae burger", false),
-- ("bomb burger", false),
-- ("boo burger", false);


-- first code 
-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("juicy lucy", true);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("bae burger", true);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("bomb burger", true);

-- INSERT INTO burgers (burger_name, devoured)
-- VALUES ("boo burger", true);


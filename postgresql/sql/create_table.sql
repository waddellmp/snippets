CREATE TABLE tbl (col SMALLINT);

-- insert some data using GENERATE_SERIES function
INSERT INTO tbl(col) SELECT GENERATE_SERIES(1, 10);
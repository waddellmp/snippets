CREATE TABLE tbl (col SMALLINT);

-- GENERATE_SERIES to create list of values 1 through 10
INSERT INTO tbl (col) SELECT GENERATE_SERIES(1, 10);
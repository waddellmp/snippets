CREATE TABLE tbl (col SMALLINT);

-- insert some data using GENERATE_SERIES function by inserting a series of values (1-10) into tbl.col
INSERT INTO tbl(col) SELECT GENERATE_SERIES(1, 10);
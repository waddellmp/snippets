-- Create index with CREATE INDEX
CREATE INDEX test_index ON tbl (col);


-- If the table is in production, use CONCURRENTLY to avoid locking the table
-- PRO: Queries can still execute while the index is being created
-- CON: It requires a unique index to be created first
CREATE INDEX CONCURRENTLY test_index ON tbl (col);
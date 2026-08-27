-- Denotes the start of transaction
BEGIN;

-- Some action
CREATE INDEX test_index ON tbl (col);

-- Immediately rollback the action
ROLLBACK;
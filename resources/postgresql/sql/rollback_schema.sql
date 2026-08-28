-- Postgresql has a feature called "Transactional DDL"
-- This means that schema changes take effect only when the transaction has successfully committed

-- Transaction is a unit of work that is either committed or rolled back

-- Explicit transaction example:

BEGIN;

CREATE INDEX test_index ON tbl (col);

ROLLBACK;
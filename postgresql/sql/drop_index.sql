-- Drop index with DROP INDEX
DROP INDEX test_index;

-- Use concurrently when dropping index on a production table
DROP INDEX CONCURRENTLY test_index;

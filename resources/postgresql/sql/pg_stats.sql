-- Change default amount of samples from 100 to 5k
ALTER TABLE users ALTER COLUMN first_name SET STATISTICS 5_000;

-- Inspect the users table
ANALYZE users;

-- Query user table stats from pg_stats
SELECT
    attname,
    n_distinct,
    most_common_vals
FROM pg_stats
WHERE
    schemaname = 'rideshare'
    AND tablename = 'users'
    AND attname = 'first_name';
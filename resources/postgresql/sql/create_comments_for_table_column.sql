-- Add comment on users.email col
COMMENT ON users.email IS 'sensitive_data=true';

-- Use psql command \d <table_name> to display additional info
-- Use \pset format wrapped to toggle wraping
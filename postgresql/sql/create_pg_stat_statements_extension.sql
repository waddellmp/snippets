-- Connect as super user then create the extension
CREATE EXTENSION IF NOT EXISTS pg_stat_statements
WITH SCHEMA rideshare;

-- Verify the extension was created
SELECT * FROM pg_extension;
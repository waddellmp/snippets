-- 1. Create a new role/user with a password
CREATE ROLE readonly_user WITH LOGIN PASSWORD 'your_secure_password';

-- 2. Grant the built-in read-all role (PostgreSQL 14+)
-- This automatically grants read access to all current and future tables, views, and sequences.
GRANT pg_read_all_data TO readonly_user;

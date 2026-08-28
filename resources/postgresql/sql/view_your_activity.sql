-- Find your activity using your process id and the pg_stat_activity catalog
SELECT * FROM pg_stat_activity
WHERE pid = (SELECT PG_BACKEND_PID());

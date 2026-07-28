-- Cancel a slow running query by sending a SIGINT signal
-- A more graceful shutdown attempt
-- Avoids data loss
SELECT PG_CANCEL_BACKEND(pid);


-- Terminating is more forceful and may result in data loss
SELECT PG_TERMINATE_BACKEND(pid);
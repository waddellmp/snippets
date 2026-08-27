#!/usr/bin/env bash
# ==============================================================================
# Connect to db with psql
# ==============================================================================

export DB_HOST=localhost
export DB_PORT=5432
export DB_DATABASE=upboard_development
export DB_USERNAME=upboard
export DB_PASSWORD=[PASSWORD]

# Set database url via env variable in shell
export DATABASE_URL="postgres://$DB_USERNAME:$DB_PASSWORD@$DB_HOST:$DB_PORT/$DB_DATABASE"

# Connect to database
psql $DATABASE_URL
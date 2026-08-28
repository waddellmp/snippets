#!/usr/bin/env bash
# ==============================================================================
# Generate a psuedo random string in hexadecimal format that is X bytes
# 
# A hex represent 4 bits of data so there are 2 hexidecimals per byte.
# 12 bytes * 2 hex / 1 byte = 24 hex characters
# 
# Usage: ./set_random_password.sh [PASSWORD_LENGTH]
# ==============================================================================

PASSWORD_LENGTH=${1:-12}
export RIDESHARE_DB_PASSWORD=$(openssl rand -hex $PASSWORD_LENGTH)
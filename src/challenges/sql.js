export const sqlChallenges = [
  {
    id: 'sql-show-config',
    category: 'sql-admin',
    domain: 'sql',
    subcategory: 'admin',
    type: 'sql',
    title: 'SQL: Show Server Configuration File',
    resource: 'resources/postgresql/sql/show_config_file.sql',
    task: 'Write a SQL query to display the location of postgresql.conf on the server.',
    hint: 'SHOW config_file;',
    solution: 'SHOW config_file;',
    alternateSolutions: ['SHOW config_file']
  },
  {
    id: 'sql-create-extension',
    category: 'sql-ddl',
    domain: 'sql',
    subcategory: 'ddl',
    type: 'sql',
    title: 'SQL: Install Extension (IF NOT EXISTS)',
    resource: 'resources/postgresql/sql/create_pg_stat_statements_extension.sql',
    task: 'Write the SQL statement to safely install the extension "pg_stat_statements" if it is not already installed.',
    hint: 'CREATE EXTENSION IF NOT EXISTS pg_stat_statements;',
    solution: 'CREATE EXTENSION IF NOT EXISTS pg_stat_statements;',
    alternateSolutions: [
      'CREATE EXTENSION IF NOT EXISTS pg_stat_statements',
      'CREATE EXTENSION IF NOT EXISTS "pg_stat_statements"'
    ]
  },
  {
    id: 'sql-create-index-concurrently',
    category: 'sql-indexing',
    domain: 'sql',
    subcategory: 'indexing',
    type: 'sql',
    title: 'SQL: Create Index Concurrently',
    resource: 'resources/postgresql/sql/create_index.sql',
    task: 'Write the SQL statement to create an index named "users_email_idx" on table "users" column "email" CONCURRENTLY to prevent locking the table.',
    hint: 'CREATE INDEX CONCURRENTLY users_email_idx ON users (email);',
    solution: 'CREATE INDEX CONCURRENTLY users_email_idx ON users (email);',
    alternateSolutions: [
      'CREATE INDEX CONCURRENTLY users_email_idx ON users (email)',
      'CREATE INDEX CONCURRENTLY "users_email_idx" ON "users" ("email")'
    ]
  },
  {
    id: 'sql-drop-index-concurrently',
    category: 'sql-indexing',
    domain: 'sql',
    subcategory: 'indexing',
    type: 'sql',
    title: 'SQL: Drop Index Concurrently & Safely',
    resource: 'resources/postgresql/sql/create_index.sql',
    task: 'Write the SQL statement to drop the index "users_email_idx" CONCURRENTLY and IF EXISTS.',
    hint: 'DROP INDEX CONCURRENTLY IF EXISTS users_email_idx;',
    solution: 'DROP INDEX CONCURRENTLY IF EXISTS users_email_idx;',
    alternateSolutions: [
      'DROP INDEX CONCURRENTLY IF EXISTS users_email_idx',
      'DROP INDEX CONCURRENTLY IF EXISTS "users_email_idx"'
    ]
  },
  {
    id: 'sql-transactional-ddl-rollback',
    category: 'sql-transactions',
    domain: 'sql',
    subcategory: 'transactions',
    type: 'sql',
    title: 'SQL: Transactional DDL Rollback',
    resource: 'resources/postgresql/sql/transactional_ddl.sql',
    task: 'Write a transactional block that starts a transaction, creates table "temp_test (id INT)", and then rolls back.',
    hint: 'BEGIN; CREATE TABLE temp_test (id INT); ROLLBACK;',
    solution: 'BEGIN; CREATE TABLE temp_test (id INT); ROLLBACK;',
    alternateSolutions: [
      'START TRANSACTION; CREATE TABLE temp_test (id INT); ROLLBACK;'
    ]
  },
  {
    id: 'sql-cancel-backend',
    category: 'sql-admin',
    domain: 'sql',
    subcategory: 'admin',
    type: 'sql',
    title: 'SQL: Cancel Slow Query by PID',
    resource: 'resources/postgresql/sql/cancel_queries.sql',
    task: 'Write the SQL query to gracefully cancel the backend query running on pid 12345 using pg_cancel_backend.',
    hint: 'SELECT pg_cancel_backend(12345);',
    solution: 'SELECT pg_cancel_backend(12345);',
    alternateSolutions: ['SELECT pg_cancel_backend(12345)']
  },
  {
    id: 'sql-table-size',
    category: 'sql-admin',
    domain: 'sql',
    subcategory: 'admin',
    type: 'sql',
    title: 'SQL: Print Human-Readable Table Size',
    resource: 'resources/postgresql/sql/indexes_size.sql',
    task: 'Write a SQL query using pg_size_pretty and pg_total_relation_size to format the total size of table "users".',
    hint: "SELECT pg_size_pretty(pg_total_relation_size('users'));",
    solution: "SELECT pg_size_pretty(pg_total_relation_size('users'));",
    alternateSolutions: [
      "SELECT pg_size_pretty(pg_total_relation_size('users'))",
      'SELECT pg_size_pretty(pg_total_relation_size("users"))'
    ]
  },
  {
    id: 'sql-create-readonly-role',
    category: 'sql-admin',
    domain: 'sql',
    subcategory: 'admin',
    type: 'sql',
    title: 'SQL: Create Role with Login & Password',
    resource: 'resources/postgresql/sql/create_role.sql',
    task: 'Write the SQL statement to create a role named "readonly_user" WITH LOGIN and PASSWORD \'secret123\'.',
    hint: "CREATE ROLE readonly_user WITH LOGIN PASSWORD 'secret123';",
    solution: "CREATE ROLE readonly_user WITH LOGIN PASSWORD 'secret123';",
    alternateSolutions: [
      "CREATE ROLE readonly_user WITH LOGIN PASSWORD 'secret123'",
      "CREATE ROLE readonly_user WITH LOGIN ENCRYPTED PASSWORD 'secret123';"
    ]
  }
];

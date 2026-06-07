# PostgreSQL scripts

Runnable shell scripts and interactive documentation references grouped by PostgreSQL tool category.

## Core Operations

These scripts perform actual database setup, querying, and server actions:

| Script | What it does |
| --- | --- |
| [`pg_stat_statements/install_pg_stat_statements.sh`](pg_stat_statements/install_pg_stat_statements.sh) | Automatically installs and registers the `pg_stat_statements` extension. |
| [`pg_ctl/restart.sh`](pg_ctl/restart.sh) | Restarts the PostgreSQL server using `pg_ctl`. |
| [`pg_ctl/start.sh`](pg_ctl/start.sh) | Starts the PostgreSQL server using `pg_ctl`. |
| [`pg_ctl/shutdown.sh`](pg_ctl/shutdown.sh) | Stops the PostgreSQL server using `pg_ctl` safely. |
| [`pg_ctl/status.sh`](pg_ctl/status.sh) | Checks the running status of the server. |
| [`psql/show_config_file.sh`](psql/show_config_file.sh) | Outputs the path of the active config file. |
| [`psql/show_data_directory.sh`](psql/show_data_directory.sh) | Outputs the database data directory location. |
| [`psql/list_databases.sh`](psql/list_databases.sh) | Lists all databases on the server. |
| [`psql/check_connection.sh`](psql/check_connection.sh) | Verifies the connection readiness of the database. |

## Interactive Documentation & Concept Scripts

These scripts contain detailed references and explanations. Running them prints the documentation page to your terminal:

### config/
- [`config/add_extension_to_postgresql_conf.sh`](config/add_extension_to_postgresql_conf.sh) — Extension enabling workflow.
- [`config/file_locations.sh`](config/file_locations.sh) — Where config files reside on Debian/Ubuntu vs Docker.

### pg_config/
- [`pg_config/in_this_script.sh`](pg_config/in_this_script.sh) — Major version discovery logic explanation.
- [`pg_config/usage.sh`](pg_config/usage.sh) — Overview of `pg_config` flag utilities.

### pg_conftool/
- [`pg_conftool/common_actions.sh`](pg_conftool/common_actions.sh) — Safe config manipulation options.
- [`pg_conftool/syntax.sh`](pg_conftool/syntax.sh) — Arguments mapping for `pg_conftool`.
- [`pg_conftool/why_use_it.sh`](pg_conftool/why_use_it.sh) — Risks of using `sed` vs benefits of `pg_conftool`.

### pg_stat_statements/
- [`pg_stat_statements/configuration.sh`](pg_stat_statements/configuration.sh) — Available tuning knobs in `postgresql.conf`.
- [`pg_stat_statements/install.sh`](pg_stat_statements/install.sh) — The 3 steps required to install the query stats library.
- [`pg_stat_statements/read_the_stats.sh`](pg_stat_statements/read_the_stats.sh) — Queries to surface top 20 queries by execution time.
- [`pg_stat_statements/reset.sh`](pg_stat_statements/reset.sh) — Running the `pg_stat_statements_reset()` function.
- [`pg_stat_statements/what_it_tracks.sh`](pg_stat_statements/what_it_tracks.sh) — Database columns tracked by the stats view.

### psql/
- [`psql/meta_commands.sh`](psql/meta_commands.sh) — Backslash commands helper table.

### shared_preload_libraries/
- [`shared_preload_libraries/can_and_cannot_do.sh`](shared_preload_libraries/can_and_cannot_do.sh) — Capabilities and limits of preloading.
- [`shared_preload_libraries/two_step_install.sh`](shared_preload_libraries/two_step_install.sh) — Preload GUC and `CREATE EXTENSION` flow.
- [`shared_preload_libraries/where_it_lives.sh`](shared_preload_libraries/where_it_lives.sh) — Format and rules of the preload libraries string.
- [`shared_preload_libraries/why_preload.sh`](shared_preload_libraries/why_preload.sh) — Why shared memory attachments require server restart.

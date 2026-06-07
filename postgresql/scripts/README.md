# PostgreSQL scripts

Runnable shell scripts and interactive documentation references.

## Core Operations

These scripts perform actual database setup, querying, and server actions:

| Script | What it does |
| --- | --- |
| [`install_pg_stat_statements.sh`](install_pg_stat_statements.sh) | Automatically installs and registers the `pg_stat_statements` extension. |
| [`pg_ctl_restart.sh`](pg_ctl_restart.sh) | Restarts the PostgreSQL server using `pg_ctl` (includes integrated docs). |
| [`show_config_file.sh`](show_config_file.sh) | Runs SQL to output the path of the active config file. |
| [`show_data_directory.sh`](show_data_directory.sh) | Runs SQL to output the database data directory location. |

## Interactive Documentation & Concept Scripts

These scripts contain detailed references and explanations. Running them prints the documentation page to your terminal:

### Configuration & Discovery
- [`config_add_extension_to_postgresql_conf.sh`](config_add_extension_to_postgresql_conf.sh) — Extension enabling workflow.
- [`config_file_locations.sh`](config_file_locations.sh) — Where config files reside on Debian/Ubuntu vs Docker.
- [`pg_config_in_this_script.sh`](pg_config_in_this_script.sh) — Major version discovery logic explanation.
- [`pg_config_usage.sh`](pg_config_usage.sh) — Overview of `pg_config` flag utilities.
- [`pg_conftool_common_actions.sh`](pg_conftool_common_actions.sh) — Safe config manipulation options.
- [`pg_conftool_syntax.sh`](pg_conftool_syntax.sh) — Arguments mapping for `pg_conftool`.
- [`pg_conftool_why_use_it.sh`](pg_conftool_why_use_it.sh) — Risks of using `sed` vs benefits of `pg_conftool`.

### Extension & Library Reference
- [`pg_stat_statements_configuration.sh`](pg_stat_statements_configuration.sh) — Available tuning knobs in `postgresql.conf`.
- [`pg_stat_statements_install.sh`](pg_stat_statements_install.sh) — The 3 steps required to install the query stats library.
- [`pg_stat_statements_read_the_stats.sh`](pg_stat_statements_read_the_stats.sh) — Queries to surface top 20 queries by execution time.
- [`pg_stat_statements_reset.sh`](pg_stat_statements_reset.sh) — Running the `pg_stat_statements_reset()` function.
- [`pg_stat_statements_what_it_tracks.sh`](pg_stat_statements_what_it_tracks.sh) — Database columns tracked by the stats view.
- [`shared_preload_libraries_can_and_cannot_do.sh`](shared_preload_libraries_can_and_cannot_do.sh) — Capabilities and limits of preloading.
- [`shared_preload_libraries_two_step_install.sh`](shared_preload_libraries_two_step_install.sh) — Preload GUC and `CREATE EXTENSION` flow.
- [`shared_preload_libraries_where_it_lives.sh`](shared_preload_libraries_where_it_lives.sh) — Format and rules of the preload libraries string.
- [`shared_preload_libraries_why_preload.sh`](shared_preload_libraries_why_preload.sh) — Why shared memory attachments require server restart.

### Shell Scripting Reference
- [`shell_scripting_command_vs_which.sh`](shell_scripting_command_vs_which.sh) — Why `command -v` is preferred over `which`.
- [`shell_scripting_euid.sh`](shell_scripting_euid.sh) — Checking for root/sudo execution using `$EUID`.
- [`shell_scripting_if_grep_else.sh`](shell_scripting_if_grep_else.sh) — Using `grep -q` for boolean evaluations.
- [`shell_scripting_or_fallback.sh`](shell_scripting_or_fallback.sh) — Command status fallbacks inside variable assignment.
- [`shell_scripting_sed_in_place.sh`](shell_scripting_sed_in_place.sh) — Safe replacement regex and in-place file modifications.
- [`shell_scripting_strict_mode.sh`](shell_scripting_strict_mode.sh) — The meaning of `set -euo pipefail`.
- [`shell_scripting_sudo_u.sh`](shell_scripting_sudo_u.sh) — Executing commands as the system `postgres` user.

### Client Tools & Indexes
- [`psql_meta_commands.sh`](psql_meta_commands.sh) — Backslash commands helper table.
- [`docs_README.sh`](docs_README.sh) — Original documentation index structure reference.

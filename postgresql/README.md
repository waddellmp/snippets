# PostgreSQL snippets

Snippets for PostgreSQL configuration, extensions, and tooling — focused
on what's actually used in scripts under this repo.

## Layout

```
postgresql/
└── scripts/
    ├── config_add_extension_to_postgresql_conf.sh
    ├── config_file_locations.sh
    ├── docs_README.sh
    ├── install_pg_stat_statements.sh
    ├── pg_config_in_this_script.sh
    ├── pg_config_usage.sh
    ├── pg_conftool_common_actions.sh
    ├── pg_conftool_syntax.sh
    ├── pg_conftool_why_use_it.sh
    ├── pg_ctl_restart.sh
    ├── pg_stat_statements_configuration.sh
    ├── pg_stat_statements_install.sh
    ├── pg_stat_statements_read_the_stats.sh
    ├── pg_stat_statements_reset.sh
    ├── pg_stat_statements_what_it_tracks.sh
    ├── psql_meta_commands.sh
    ├── shared_preload_libraries_can_and_cannot_do.sh
    ├── shared_preload_libraries_two_step_install.sh
    ├── shared_preload_libraries_where_it_lives.sh
    ├── shared_preload_libraries_why_preload.sh
    ├── shell_scripting_command_vs_which.sh
    ├── shell_scripting_euid.sh
    ├── shell_scripting_if_grep_else.sh
    ├── shell_scripting_or_fallback.sh
    ├── shell_scripting_sed_in_place.sh
    ├── shell_scripting_strict_mode.sh
    ├── shell_scripting_sudo_u.sh
    ├── show_config_file.sh
    └── show_data_directory.sh
```

## Indexes

- [`config_add_extension_to_postgresql_conf.sh`](scripts/config_add_extension_to_postgresql_conf.sh)
- [`config_file_locations.sh`](scripts/config_file_locations.sh)
- [`docs_README.sh`](scripts/docs_README.sh)
- [`install_pg_stat_statements.sh`](scripts/install_pg_stat_statements.sh)
- [`pg_config_in_this_script.sh`](scripts/pg_config_in_this_script.sh)
- [`pg_config_usage.sh`](scripts/pg_config_usage.sh)
- [`pg_conftool_common_actions.sh`](scripts/pg_conftool_common_actions.sh)
- [`pg_conftool_syntax.sh`](scripts/pg_conftool_syntax.sh)
- [`pg_conftool_why_use_it.sh`](scripts/pg_conftool_why_use_it.sh)
- [`pg_ctl_restart.sh`](scripts/pg_ctl_restart.sh)
- [`pg_stat_statements_configuration.sh`](scripts/pg_stat_statements_configuration.sh)
- [`pg_stat_statements_install.sh`](scripts/pg_stat_statements_install.sh)
- [`pg_stat_statements_read_the_stats.sh`](scripts/pg_stat_statements_read_the_stats.sh)
- [`pg_stat_statements_reset.sh`](scripts/pg_stat_statements_reset.sh)
- [`pg_stat_statements_what_it_tracks.sh`](scripts/pg_stat_statements_what_it_tracks.sh)
- [`psql_meta_commands.sh`](scripts/psql_meta_commands.sh)
- [`shared_preload_libraries_can_and_cannot_do.sh`](scripts/shared_preload_libraries_can_and_cannot_do.sh)
- [`shared_preload_libraries_two_step_install.sh`](scripts/shared_preload_libraries_two_step_install.sh)
- [`shared_preload_libraries_where_it_lives.sh`](scripts/shared_preload_libraries_where_it_lives.sh)
- [`shared_preload_libraries_why_preload.sh`](scripts/shared_preload_libraries_why_preload.sh)
- [`shell_scripting_command_vs_which.sh`](scripts/shell_scripting_command_vs_which.sh)
- [`shell_scripting_euid.sh`](scripts/shell_scripting_euid.sh)
- [`shell_scripting_if_grep_else.sh`](scripts/shell_scripting_if_grep_else.sh)
- [`shell_scripting_or_fallback.sh`](scripts/shell_scripting_or_fallback.sh)
- [`shell_scripting_sed_in_place.sh`](scripts/shell_scripting_sed_in_place.sh)
- [`shell_scripting_strict_mode.sh`](scripts/shell_scripting_strict_mode.sh)
- [`shell_scripting_sudo_u.sh`](scripts/shell_scripting_sudo_u.sh)
- [`show_config_file.sh`](scripts/show_config_file.sh)
- [`show_data_directory.sh`](scripts/show_data_directory.sh)

## Cross-references

- Per-command reference lives in [`../linux/bash/commands/`](../linux/bash/commands/README.md)
- Per-bash-concept reference lives in [`../linux/bash/`](../linux/bash/README.md)

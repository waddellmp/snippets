# PostgreSQL snippets

Snippets for PostgreSQL configuration, extensions, and tooling — focused
on what's actually used in scripts under this repo.

## Layout

```
postgresql/
└── scripts/
    ├── config/
    │   ├── add_extension_to_postgresql_conf.sh
    │   └── file_locations.sh
    ├── pg_config/
    │   ├── in_this_script.sh
    │   └── usage.sh
    ├── pg_conftool/
    │   ├── common_actions.sh
    │   ├── syntax.sh
    │   └── why_use_it.sh
    ├── pg_ctl/
    │   ├── restart.sh
    │   ├── shutdown.sh
    │   ├── start.sh
    │   └── status.sh
    ├── pg_stat_statements/
    │   ├── configuration.sh
    │   ├── install.sh
    │   ├── install_pg_stat_statements.sh
    │   ├── read_the_stats.sh
    │   ├── reset.sh
    │   └── what_it_tracks.sh
    ├── psql/
    │   ├── check_connection.sh
    │   ├── list_databases.sh
    │   ├── meta_commands.sh
    │   ├── show_config_file.sh
    │   └── show_data_directory.sh
    └── shared_preload_libraries/
       ├── can_and_cannot_do.sh
       ├── two_step_install.sh
       ├── where_it_lives.sh
       └── why_preload.sh
```

## Indexes

### config/
- [`config/add_extension_to_postgresql_conf.sh`](scripts/config/add_extension_to_postgresql_conf.sh)
- [`config/file_locations.sh`](scripts/config/file_locations.sh)

### pg_config/
- [`pg_config/in_this_script.sh`](scripts/pg_config/in_this_script.sh)
- [`pg_config/usage.sh`](scripts/pg_config/usage.sh)

### pg_conftool/
- [`pg_conftool/common_actions.sh`](scripts/pg_conftool/common_actions.sh)
- [`pg_conftool/syntax.sh`](scripts/pg_conftool/syntax.sh)
- [`pg_conftool/why_use_it.sh`](scripts/pg_conftool/why_use_it.sh)

### pg_ctl/
- [`pg_ctl/restart.sh`](scripts/pg_ctl/restart.sh)
- [`pg_ctl/shutdown.sh`](scripts/pg_ctl/shutdown.sh)
- [`pg_ctl/start.sh`](scripts/pg_ctl/start.sh)
- [`pg_ctl/status.sh`](scripts/pg_ctl/status.sh)

### pg_stat_statements/
- [`pg_stat_statements/configuration.sh`](scripts/pg_stat_statements/configuration.sh)
- [`pg_stat_statements/install.sh`](scripts/pg_stat_statements/install.sh)
- [`pg_stat_statements/install_pg_stat_statements.sh`](scripts/pg_stat_statements/install_pg_stat_statements.sh)
- [`pg_stat_statements/read_the_stats.sh`](scripts/pg_stat_statements/read_the_stats.sh)
- [`pg_stat_statements/reset.sh`](scripts/pg_stat_statements/reset.sh)
- [`pg_stat_statements/what_it_tracks.sh`](scripts/pg_stat_statements/what_it_tracks.sh)

### psql/
- [`psql/check_connection.sh`](scripts/psql/check_connection.sh)
- [`psql/list_databases.sh`](scripts/psql/list_databases.sh)
- [`psql/meta_commands.sh`](scripts/psql/meta_commands.sh)
- [`psql/show_config_file.sh`](scripts/psql/show_config_file.sh)
- [`psql/show_data_directory.sh`](scripts/psql/show_data_directory.sh)

### shared_preload_libraries/
- [`shared_preload_libraries/can_and_cannot_do.sh`](scripts/shared_preload_libraries/can_and_cannot_do.sh)
- [`shared_preload_libraries/two_step_install.sh`](scripts/shared_preload_libraries/two_step_install.sh)
- [`shared_preload_libraries/where_it_lives.sh`](scripts/shared_preload_libraries/where_it_lives.sh)
- [`shared_preload_libraries/why_preload.sh`](scripts/shared_preload_libraries/why_preload.sh)

## Cross-references

- Per-command reference lives in [`../linux/bash/commands/`](../linux/bash/commands/README.md)
- Per-bash-concept reference lives in [`../linux/bash/`](../linux/bash/README.md)

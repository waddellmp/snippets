# PostgreSQL snippets

Snippets for PostgreSQL configuration, extensions, and tooling — focused
on what's actually used in scripts under this repo.

## Layout

```
postgresql/
├── docs/                                # concept-focused references
│   ├── config/
│   ├── psql/
│   ├── pg-config/
│   ├── pg-conftool/
│   ├── pg-stat-statements/
│   ├── shared-preload-libraries/
│   └── shell-scripting/                 # bash notes tied to setup.sh
├── scripts/                             # runnable shell scripts
│   └── install-pg-stat-statements/
│       └── setup.sh                     # the one script in this repo
└── sql/                                 # one-off SQL snippets
    └── show-config-file/
        └── query.sql
```

## Indexes

- [`docs/`](docs/README.md) — concept references
- [`scripts/`](scripts/README.md) — runnable scripts
- [`sql/`](sql/README.md) — SQL snippets

## Cross-references

- Per-command reference lives in [`../linux/bash/commands/`](../linux/bash/commands/README.md)
- Per-bash-concept reference lives in [`../linux/bash/`](../linux/bash/README.md)

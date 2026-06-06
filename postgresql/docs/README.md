# PostgreSQL docs

Concept-focused references. Each topic gets its own folder; each snippet
inside is a focused page.

## Folders

| Folder | What it covers |
| --- | --- |
| [config](config/) | File locations and how to edit them |
| [psql](psql/) | The `psql` interactive terminal |
| [pg-config](pg-config/) | The `pg_config` discovery tool |
| [pg-conftool](pg-conftool/) | The Debian/Ubuntu config helper |
| [pg-stat-statements](pg-stat-statements/) | The query-stats extension |
| [shared-preload-libraries](shared-preload-libraries/) | The GUC and what it does |
| [shell-scripting](shell-scripting/) | Bash idioms used in `setup.sh` |

## Snippet index

### config/

- [file-locations](config/file-locations.md)
- [add-extension-to-postgresql-conf](config/add-extension-to-postgresql-conf.md)

### psql/

- [meta-commands](psql/meta-commands.md)

### pg-config/

- [usage](pg-config/usage.md)
- [in-this-script](pg-config/in-this-script.md)

### pg-conftool/

- [why-use-it](pg-conftool/why-use-it.md)
- [syntax](pg-conftool/syntax.md)
- [common-actions](pg-conftool/common-actions.md)

### pg-stat-statements/

- [install](pg-stat-statements/install.md)
- [what-it-tracks](pg-stat-statements/what-it-tracks.md)
- [read-the-stats](pg-stat-statements/read-the-stats.md)
- [reset](pg-stat-statements/reset.md)
- [configuration](pg-stat-statements/configuration.md)

### shared-preload-libraries/

- [where-it-lives](shared-preload-libraries/where-it-lives.md)
- [why-preload](shared-preload-libraries/why-preload.md)
- [can-and-cannot-do](shared-preload-libraries/can-and-cannot-do.md)
- [two-step-install](shared-preload-libraries/two-step-install.md)

### shell-scripting/

- [strict-mode](shell-scripting/strict-mode.md)
- [euid](shell-scripting/euid.md)
- [command-vs-which](shell-scripting/command-vs-which.md)
- [or-fallback](shell-scripting/or-fallback.md)
- [sed-in-place](shell-scripting/sed-in-place.md)
- [sudo-u](shell-scripting/sudo-u.md)
- [if-grep-else](shell-scripting/if-grep-else.md)

## Reading order for `setup.sh`

1. [shared-preload-libraries/where-it-lives](shared-preload-libraries/where-it-lives.md)
2. [pg-stat-statements/install](pg-stat-statements/install.md) — the goal
3. [pg-config/usage](pg-config/usage.md) + [pg-config/in-this-script](pg-config/in-this-script.md)
4. [pg-conftool/why-use-it](pg-conftool/why-use-it.md) + [syntax](pg-conftool/syntax.md) + [common-actions](pg-conftool/common-actions.md)
5. [shell-scripting/](shell-scripting/) — the bash idioms the script uses

# `pg_config` usage

A utility shipped with PostgreSQL that reports compile-time and installation
information for the installed server / client. It is the standard way for
scripts to discover **where PostgreSQL is installed** and **which version is
running**.

## Common flags

```sh
pg_config                  # print everything
pg_config --version        # e.g. "PostgreSQL 17.2 (Ubuntu ...)"
pg_config --bindir         # directory of client binaries (psql, pg_dump, ...)
pg_config --libdir         # directory of shared libraries
pg_config --pkgincludedir  # C header files for extension development
pg_config --pkglibdir      # where extensions like pg_stat_statements.so live
```

## See also

- [in-this-script](in-this-script.md) — the version-detection pipeline
  walkthrough

# `#!/usr/bin/env bash`

The very first line of an executable script tells the kernel which
**interpreter** to use to run it.

## Form

```sh
#!/usr/bin/env bash
```

| Variant | Behavior |
| --- | --- |
| `#!/bin/bash` | Hard-coded path. Fails on systems where bash isn't there. |
| `#!/usr/bin/env bash` | Resolves `bash` via your `PATH`. Portable across distros. |
| `#!/bin/sh` | POSIX shell — for scripts that don't need bash extensions. |

## Why `env` is preferred

- `bash` may live at `/bin/bash`, `/usr/bin/bash`, `/usr/local/bin/bash`
  depending on distro and install method.
- `env` is almost always at `/usr/bin/env` (POSIX-mandated).
- `env bash` consults `PATH`, so it works in containers, minimal images, and
  macOS homebrew installs alike.

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh:1`:

```sh
#!/usr/bin/env bash
```

## See also

- [set/strict-mode](../set/strict-mode.md) — the next non-comment line in any
  serious bash script

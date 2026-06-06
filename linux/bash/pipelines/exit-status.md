# Pipeline exit status

By default, a pipeline's exit status is the **last** command's exit status.
That is usually what you want, but it hides upstream failures.

```sh
false | true            # pipeline exits 0 (success!)
```

`set -o pipefail` (part of [strict mode](../set/strict-mode.md)) changes
this: the pipeline exits non-zero if **any** stage fails.

## Without `pipefail`

```sh
pg_config --version 2>/dev/null | awk '{print $2}' | cut -d. -f1
```

If `pg_config` is missing and `awk`/`cut` produce output from a
partially-written pipe, the pipeline "succeeds". The script then builds a
path like `/etc/postgresql//main/...` and the subsequent `[ -f ]` check
fails — which is fine here, but in general it's a hidden bug.

## With `pipefail`

The same pipeline, with `set -o pipefail` active, exits with the first
non-zero stage's status. Now the failure is detected at the right place,
and `set -e` will abort the script.

## Used in this repo

The script turns on `pipefail` as part of `set -euo pipefail` on line 3,
then relies on the version-detection pipeline detecting failure
immediately (via the `||` fallback) rather than passing a bad value
forward.

## See also

- [set/strict-mode](../set/strict-mode.md) — full `set` reference
- [basic](basic.md) — basic pipeline syntax

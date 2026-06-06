# Single vs double quotes

Bash does several things to a word before the shell runs it: it splits on
whitespace, expands globs (`*`, `?`, `[...]`), and expands variables.
**Quoting controls which of those happen.**

| Form | Behavior |
| --- | --- |
| `'...'` | **No** expansion at all — literal text |
| `"..."` | Variable and command substitution happen, but **no** word splitting or globbing |
| `bare` | All of the above |

## Examples

```sh
NAME="Matt"
echo '$NAME'              # $NAME          (literal)
echo "$NAME"              # Matt           (expanded, single word)
echo $NAME                # Matt           (expanded, but with no quotes this is identical here)
echo hello world          # two args: hello, world
echo "hello world"        # one arg: hello world

FILES="*.txt"             # the literal string *.txt, even if it matches
ls $FILES                 # expands to filenames matching *.txt
ls "$FILES"               # looks for a file literally named '*.txt'
```

**Rule of thumb**: quote every variable and command substitution. The few
times you want word splitting are obvious (e.g. building an args array).

## Used in this repo

`postgresql/scripts/install-pg-stat-statements/setup.sh` uses both:

- Double quotes around most variable references:
  `echo "Error: ... ${CONF_FILE}." >&2`
- Single quotes inside the `sed` expression so `$` and other regex chars
  aren't expanded:
  `sed -i "s/.../...shared_preload_libraries = 'pg_stat_statements'/g"`

## See also

- [when-to-quote](when-to-quote.md)
- [variables/assignment-and-reference](../variables/assignment-and-reference.md)

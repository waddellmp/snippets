# Parameter expansions

A small but useful family of bash expansions that transform a variable's
value on read.

| Syntax | Meaning |
| --- | --- |
| `${var:-default}` | Use `default` if `var` is unset or empty |
| `${var:=default}` | Use `default`, and **assign** it to `var` |
| `${var#prefix}` | Strip shortest matching prefix |
| `${var%suffix}` | Strip shortest matching suffix |
| `${var^^}` | Uppercase |
| `${var,,}` | Lowercase |
| `${#var}` | Length of the string |
| `${var/old/new}` | Replace first match |
| `${var//old/new}` | Replace all matches |

## Default-value examples

```sh
: "${PG_VERSION:=17}"      # assign default if unset/empty
: "${DEBUG:=}"             # init to empty so set -u doesn't complain
```

The leading `:` (no-op) is needed when you want the **side effect** (the
assignment) without doing anything with the result.

| Form | Behavior |
| --- | --- |
| `${var:-default}` | Use `default` if `var` is unset or empty (**doesn't** assign) |
| `${var:=default}` | Use `default` and **assign** it back to `var` |
| `${var:+alt}` | Use `alt` if `var` is set, else empty |
| `${var:?msg}` | Error out with `msg` if `var` is unset/empty |

## Substring removal examples

```sh
file=/home/matthew/note.txt
echo "${file##*/}"        # note.txt   (strip longest matching prefix)
echo "${file#*/}"         # matthew/note.txt  (strip shortest matching prefix)
echo "${file%.txt}"       # /home/matthew/note
echo "${file##*.}"        # txt
```

## See also

- [assignment-and-reference](assignment-and-reference.md)
- [parameter-defaults](parameter-defaults.md) — `${var:-default}` and
  `${var:=default}` in more depth
- [substitution/or-fallback](../substitution/or-fallback.md) — the
  alternative `|| echo` idiom

# String tests

The `[` command's string operators.

```sh
[ -z "$str" ]       # empty
[ -n "$str" ]       # non-empty
[ "$a" = "$b" ]     # equal (POSIX; bash also accepts ==)
[ "$a" != "$b" ]    # not equal
```

## Always quote

**Always quote variables** inside `[ ... ]`. An unquoted empty string makes
the test syntactically invalid or accidentally passes:

```sh
str=""
[ -n $str ] && echo "non-empty"    # BUG: $str expands to nothing, becomes [ -n ], which is a syntax error
[ -n "$str" ] && echo "non-empty"  # correct: $str is empty, -n returns false
```

## vs numeric tests

String `=` does byte-wise comparison, not numeric. `"10" = "9"` is true
because `1` < `9` lexically. For numbers, use `-eq`, `-lt`, etc.

## See also

- [file-tests](file-tests.md)
- [numeric-tests](numeric-tests.md)

# Special variables

Bash exposes many read-only variables with useful runtime info.

| Name | Meaning |
| --- | --- |
| `$EUID` | Effective user ID (see [euid](euid.md)) |
| `$UID` | Real user ID (see [uid-vs-euid](uid-vs-euid.md)) |
| `$?` | Exit status of the last command |
| `$#` | Number of positional arguments |
| `$@` | All positional arguments, each as a separate word |
| `$!` | PID of the most recent background job |
| `$$` | PID of the current shell |
| `$HOME` | Current user's home directory |
| `$PATH` | Command search path |
| `$PWD` | Current working directory |
| `$BASH_VERSION` | Bash version string |
| `$RANDOM` | A random integer 0-32767 each time it's read |
| `$_` | Last argument of the previous command |

`$EUID` is the only one used in the current script. The others appear in
scripts throughout the wild — knowing them saves you from reinventing them.

## See also

- [euid](euid.md)
- [assignment-and-reference](assignment-and-reference.md)

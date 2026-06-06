# File Descriptors

In Unix-like systems, "everything is a file". A **file descriptor (FD)** is a non-negative integer that the kernel uses to refer to an open stream (a file, socket, pipe, or device).

## Standard File Descriptors

Every process starts with three default file descriptors:

| FD | Name | Default Device | Bash Constant | Description |
|---|---|---|---|---|
| `0` | `stdin` | Keyboard | `/dev/stdin` | Standard input (where the program reads data from) |
| `1` | `stdout` | Terminal | `/dev/stdout` | Standard output (where the program writes normal output) |
| `2` | `stderr` | Terminal | `/dev/stderr` | Standard error (where the program writes diagnostic/error output) |

## Manipulating File Descriptors in Bash

Bash allows you to open, close, and redirect custom file descriptors (usually `3` through `9`) using the `exec` command.

### Opening a File Descriptor

You can open a custom file descriptor for reading or writing:

```sh
# Open FD 3 for writing to a file (truncates)
exec 3> log.txt

# Open FD 4 for appending to a file
exec 4>> events.log

# Open FD 5 for reading from a file
exec 5< input.txt
```

### Reading and Writing

Once opened, you can redirect data to or from these file descriptors:

```sh
# Write to FD 3
echo "A log entry" >&3

# Read a line from FD 5
read -r line <&5
```

### Closing a File Descriptor

Always close custom file descriptors when you are done to free system resources:

```sh
# Close FD 3 (writing)
exec 3>&-

# Close FD 5 (reading)
exec 5<&-
```

## How to Inspect Open File Descriptors

You can view the file descriptors currently open for your shell or a process by inspecting `/proc`:

```sh
# List open file descriptors for the current shell (process ID $$)
ls -l /proc/$$/fd/
```

This will output symbolic links pointing to the actual files or devices open on each FD.

## Used in this repo

[`postgresql/scripts/install-pg-stat-statements/setup.sh`](../../../postgresql/scripts/install-pg-stat-statements/setup.sh):

| Line | Pattern | Why |
|---|---|---|
| 7, 17 | `echo "Error..." >&2` | Redirects stdout of `echo` to stderr (FD 2). |
| 13, 25 | `2>/dev/null` | Redirects stderr (FD 2) to the null device (discarding it). |
| 25 | `>/dev/null 2>&1` | Redirects stdout (FD 1) to `/dev/null`, and redirects stderr (FD 2) to the same destination as FD 1. |

## See also

- [operators](operators.md) — common redirection symbols
- [order-matters](order-matters.md) — how left-to-right evaluation impacts FDs

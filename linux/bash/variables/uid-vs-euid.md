# `$UID` vs `$EUID`

Bash exposes both the real and effective user ID as read-only variables.

| Variable | Meaning |
| --- | --- |
| `$UID` | Real user ID |
| `$EUID` | Effective user ID |

For most day-to-day shell use they're identical, but for **setuid programs**
and **`sudo`** they differ:

```sh
sudo -u postgres bash -c 'echo "UID=$UID EUID=$EUID"'
# UID=1000 EUID=104      (or whatever postgres's UID is)
```

For root checks, prefer `$EUID` — it's what determines whether the process
can actually do privileged things.

## See also

- [euid](euid.md) — `$EUID` deep dive

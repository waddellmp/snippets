# AWK Practice Problems

## Level 1: Basics

1. Print the number of characters in each line of a file.
   ```bash
   awk '{print length($0)}' data.txt
   ```

2. Print only lines longer than 50 characters.
   ```bash
   awk 'length($0) > 50 {print $0}' data.txt
   ```

3. Print all lines containing a digit.
   ```bash
   awk '/[0-9]/ {print $0}' data.txt
   ```

4. Print lines in reverse order (without using `tac`).
   ```bash
    awk '
    # For each line, store the content in the "lines" array.
    # NR (current line number) starts at 1 (AWK is 1-indexed).
    # $0 holds the current line in memory
    {
      lines[NR] = $0
    }
    # Once the entire file is read, the END block runs once.
    # NR now holds the total line count.
    END {
      # Loop backwards from the total lines (NR) down to 1.
      for (i = NR; i > 0; i--) {
        print lines[i]
      }
    }' data.txt
   ```

5. Replace all spaces with tabs in a file.
   ```bash
   # gsub is global replace.
   # print with no args means print $0
   awk '{gsub(/ /, "\t"); print}' data.txt
   ```

## Level 2: Intermediate

6. Given a file with format `name:age:city`, print names of people older than 25.
   ```bash
   # Use -F: to specify colon as the separator. 
   # $1 is name, $2 is age.
   awk -F: '$2 > 25 {print $1}' data.txt
   ```
7. Count the number of words in each line and print the average.
   ```bash
   awk '{sum+=NF} END{print sum/NR}' data.txt
   ```

8. Given a file with numbers (one per line), find the maximum value.
   ```bash
   awk 'NR==1 {max=$1} $1>max {max=$1} END {print max}' data.txt
   ```

9. Given a file with numbers (one per line), calculate the standard deviation.

10. Print unique lines from a file (duplicates removed).

## Level 3: Advanced

11. Implement a simple CSV parser that handles quoted fields containing commas.

12. Given a log file with timestamps, extract entries from a specific date range.

13. Implement `wc -l` functionality using AWK.

14. Given a file with nested parentheses, count the nesting level of each line.

15. Implement a basic text-based bar chart from numeric data.

## Level 4: Real-world

16. Parse `/etc/passwd` and print users with UID > 1000.

17. Given an Apache access log, find the top 10 most requested URLs.

18. Given a file with JSON-like entries (one per line), extract specific fields.

19. Implement a simple word count program with case normalization and punctuation removal.

20. Parse HTML table rows and output as CSV.

---

## Bonus Challenges

21. Write an AWK one-liner to transpose a matrix (swap rows and columns).

22. Implement a basic calculator that evaluates arithmetic expressions.

23. Given a sorted file, detect and print all consecutive duplicate lines.

24. Parse environment variable syntax (`KEY=value`) and export them.

25. Implement a simple log analyzer that groups entries by hour.

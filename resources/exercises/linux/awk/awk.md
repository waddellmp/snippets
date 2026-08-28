# AWK Exercises

A progressive set of exercises to learn and practice AWK, from basic to advanced concepts.

## Setup

Create a test file called `data.txt` with the following content:

```
John Smith	35	Engineer	San Francisco
Jane Doe	28	Designer	New York
Bob Johnson	42	Manager	Chicago
Alice Williams	31	Developer	San Francisco
Charlie Brown	29	Designer	Boston
Diana Ross	55	Executive	New York
Eve Wilson	26	Developer	San Francisco
Frank Miller	48	Manager	Chicago
Grace Lee	33	Engineer	Boston
Henry Taylor	40	Developer	New York
```

Save this file with tab-separated values (you can use `printf` or a text editor).

---

## Exercise 1: Basic Field Printing

Print the first field (first column) from `data.txt`.

**Expected output:**
```
John
Jane
Bob
Alice
Charlie
Diana
Eve
Frank
Grace
Henry
```

**Hint:** Use `$1` to reference the first field.

---

## Exercise 2: Multiple Fields

Print the first and third fields (name and profession) from `data.txt`.

**Expected output:**
```
John Smith Engineer
Jane Doe Designer
Bob Johnson Manager
...
```

---

## Exercise 3: Custom Output Format

Print the data in a formatted way: "Name is a Profession".

**Expected output:**
```
John Smith is a Engineer
Jane Doe is a Designer
...
```

---

## Exercise 4: Conditional Filtering

Print only people who live in San Francisco.

**Expected output:**
```
John Smith	35	Engineer	San Francisco
Alice Williams	31	Developer	San Francisco
Eve Wilson	26	Developer	San Francisco
```

**Hint:** Use `$4 == "San Francisco"` as a condition.

---

## Exercise 5: Numeric Comparison

Print only people who are 30 years or older.

**Expected output:**
```
John Smith	35	Engineer	San Francisco
Bob Johnson	42	Manager	Chicago
Alice Williams	31	Developer	San Francisco
Diana Ross	55	Executive	New York
Frank Miller	48	Manager	Chicago
Grace Lee	33	Engineer	Boston
Henry Taylor	40	Developer	New York
```

---

## Exercise 6: Pattern Matching

Print only engineers (case-insensitive match).

**Hint:** Use the `~` operator with a regex pattern.

---

## Exercise 7: Counting

Count the number of people in each city.

**Expected output:**
```
San Francisco 3
New York 3
Chicago 2
Boston 2
```

**Hint:** Use an associative array to count occurrences.

---

## Exercise 8: Summing and Averaging

Calculate the total age and average age of all people.

**Expected output:**
```
Total age: 387
Average age: 38.7
```

---

## Exercise 9: Sorting Data

Print people sorted by age (youngest first).

**Hint:** You may need to use `sort` in combination with AWK, or implement sorting in AWK.

---

## Exercise 10: Multi-line Output

Print each person's information in a multi-line format:

```
Name: John Smith
Age: 35
Profession: Engineer
City: San Francisco

Name: Jane Doe
...
```

**Hint:** Use `print` with literal strings and multiple fields.

---

## Exercise 11: Field Separator Manipulation

Create a new file `names.txt` with content:
```
John Smith
Jane Doe
Bob Johnson
```

Use AWK to reverse the order of first and last name, outputting "Last, First" format.

**Expected output:**
```
Smith, John
Doe, Jane
Johnson, Bob
```

---

## Exercise 12: Complex Pattern Matching

Print only developers and designers under 35 years old.

**Expected output:**
```
Alice Williams	31	Developer	San Francisco
Charlie Brown	29	Designer	Boston
Eve Wilson	26	Developer	San Francisco
Grace Lee	33	Engineer	Boston
```

Wait - that's not right! Fix the filter to only include developers and designers.

---

## Exercise 13: Line Number Manipulation

Print every other line starting from line 2.

**Expected output:**
```
Jane Doe	28	Designer	New York
Alice Williams	31	Developer	San Francisco
Diana Ross	55	Executive	New York
Frank Miller	48	Manager	Chicago
Henry Taylor	40	Developer	New York
```

**Hint:** Use `NR` (number of records) with modulo operator.

---

## Exercise 14: File Processing with Multiple Files

Create two files:

`file1.txt`:
```
apple
banana
cherry
```

`file2.txt`:
```
100
200
300
```

Use AWK to combine them into:
```
apple 100
banana 200
cherry 300
```

**Hint:** Use `NR==FNR` pattern to process the first file, then the second.

---

## Exercise 15: Real-world Log Processing

Given a log file `access.log`:
```
192.168.1.1 - - [01/Jan/2024:10:00:00] "GET /index.html" 200 1234
192.168.1.2 - - [01/Jan/2024:10:01:00] "GET /about.html" 200 2345
192.168.1.1 - - [01/Jan/2024:10:02:00] "GET /contact.html" 404 567
192.168.1.3 - - [01/Jan/2024:10:03:00] "POST /login" 302 0
```

Extract and count unique IP addresses, showing the top 3.

**Expected output:**
```
192.168.1.1 2
192.168.1.2 1
192.168.1.3 1
```

---

## Bonus Exercises

### B1: Word Frequency Counter

Create a file `sample.txt` with some text content. Write an AWK script to count word frequencies.

### B2: CSV Column Selector

Write an AWK command that can select specific columns from a CSV file by column numbers passed as arguments.

### B3: Data Validation

Given a file with user data, validate that each line has exactly 4 fields and print any invalid lines.

---

## Solutions

See `awk-solutions.md` for hints and reference solutions.

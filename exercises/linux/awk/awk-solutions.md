# AWK Exercise Solutions

## Exercise 1: Basic Field Printing
```bash
awk '{print $1}' data.txt
```

## Exercise 2: Multiple Fields
```bash
awk '{print $1, $3}' data.txt
```

## Exercise 3: Custom Output Format
```bash
awk '{print $1, $2, "is a", $4}' data.txt
```

## Exercise 4: Conditional Filtering
```bash
awk '$4 == "San Francisco" {print}' data.txt
```

## Exercise 5: Numeric Comparison
```bash
awk '$2 >= 30 {print}' data.txt
```

## Exercise 6: Pattern Matching
```bash
awk 'tolower($3) ~ /engineer/ {print}' data.txt
```

## Exercise 7: Counting
```bash
awk '{count[$4]++} END {for (city in count) print city, count[city]}' data.txt | sort
```

## Exercise 8: Summing and Averaging
```bash
awk '
{
    total += $2
    count++
}
END {
    print "Total age:", total
    print "Average age:", total/count
}' data.txt
```

## Exercise 9: Sorting Data
```bash
# Method 1: Use sort command
awk '{print $2, $0}' data.txt | sort -n | cut -d" " -f2-

# Method 2: Store all and sort in AWK
awk '{data[NR] = $0; age[NR] = $2} END {
    for (i = 1; i <= NR; i++) {
        for (j = i + 1; j <= NR; j++) {
            if (age[j] < age[i]) {
                tmp = data[i]; data[i] = data[j]; data[j] = tmp
            }
        }
    }
    for (i = 1; i <= NR; i++) print data[i]
}' data.txt
```

## Exercise 10: Multi-line Output
```bash
awk '{
    print "Name: " $1 " " $2
    print "Age: " $3
    print "Profession: " $4
    print "City: " $5
    print ""
}' data.txt
```

## Exercise 11: Field Separator Manipulation
```bash
# Create names.txt first
awk '{print $2 ", " $1}' names.txt
```

## Exercise 12: Complex Pattern Matching
```bash
# Developers and designers under 35
awk '($3 ~ /Developer/ || $3 ~ /Designer/) && $2 < 35 {print}' data.txt
```

## Exercise 13: Line Number Manipulation
```bash
awk 'NR % 2 == 0 {print}' data.txt
```

## Exercise 14: File Processing with Multiple Files
```bash
awk 'NR==FNR {a[NR]=$0; next} {print a[FNR], $0}' file1.txt file2.txt
```

## Exercise 15: Real-world Log Processing
```bash
awk '{ips[$1]++} END {for (ip in ips) print ip, ips[ip]}' access.log | sort -k2 -rn | head -3
```

## Bonus Solutions

### B1: Word Frequency Counter
```bash
awk '{
    for (i = 1; i <= NF; i++) {
        word = tolower($i)
        gsub(/[^a-z]/, "", word)
        if (word != "") counts[word]++
    }
}
END {
    for (w in counts) print counts[w], w
}' sample.txt | sort -rn
```

### B2: CSV Column Selector
```bash
# Usage: awk -f columns.awk -v cols="1,3" file.csv
awk -F, -v cols="$1" '
BEGIN {
    n = split(cols, selected, ",")
}
{
    for (i = 1; i <= n; i++) {
        printf "%s%s", $selected[i], (i < n ? OFS : ORS)
    }
}' file.csv
```

### B3: Data Validation
```bash
awk 'NF != 4 {print "Invalid line " NR ": " $0}' data.txt
```

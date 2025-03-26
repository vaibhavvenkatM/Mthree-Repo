# Complete SQL Guide

## Introduction to SQL
SQL (Structured Query Language) is used to communicate with and manage relational databases. It allows users to create, retrieve, update, and delete data efficiently.

---

## SQL Categories

### 1. **DDL (Data Definition Language)** - Defines database structures
- **CREATE** - Creates databases, tables, or views.
- **ALTER** - Modifies existing database structures.
- **DROP** - Deletes a database or table permanently.
- **TRUNCATE** - Removes all records from a table without deleting its structure.

#### Example Commands:
```sql
CREATE DATABASE my_database;
USE my_database;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT
);

ALTER TABLE students ADD COLUMN email VARCHAR(50);
DROP TABLE students;
TRUNCATE TABLE students;
```

---

### 2. **DML (Data Manipulation Language)** - Modifies database data
- **INSERT** - Adds new records.
- **UPDATE** - Modifies existing records.
- **DELETE** - Removes records.

#### Example Commands:
```sql
INSERT INTO students (id, name, age) VALUES (1, 'John', 20);
UPDATE students SET age = 21 WHERE id = 1;
DELETE FROM students WHERE id = 1;
```

---

### 3. **DQL (Data Query Language)** - Retrieves data from a database
- **SELECT** - Fetches records from a table.
- **GROUP BY** - Groups records based on a column.
- **ORDER BY** - Sorts results in ascending or descending order.
- **HAVING** - Filters grouped records.
- **LIKE** - Pattern matching.

#### Example Commands:
```sql
SELECT * FROM students WHERE name LIKE 'A%';
SELECT age, COUNT(*) FROM students GROUP BY age HAVING COUNT(*) > 1;
SELECT * FROM students ORDER BY name ASC;
```

---

### 4. **Joins** - Combine data from multiple tables
- **INNER JOIN** - Returns only matching rows.
- **LEFT JOIN** - Returns all rows from the left table and matching rows from the right.
- **RIGHT JOIN** - Returns all rows from the right table and matching rows from the left.
- **FULL JOIN** - Returns all rows when there is a match in either table.

#### Example Command:
```sql
SELECT students.name, courses.course_name
FROM students
INNER JOIN enrollments ON students.id = enrollments.student_id
INNER JOIN courses ON enrollments.course_id = courses.course_id;
```

---

### 5. **Union & Intersection**
- **UNION** - Combines results from two queries, removing duplicates.
- **UNION ALL** - Combines results but keeps duplicates.

#### Example Commands:
```sql
SELECT name FROM students UNION SELECT name FROM teachers;
SELECT name FROM students UNION ALL SELECT name FROM teachers;
```

---

### 6. **Ranking Functions**
- **RANK()** - Assigns a rank to rows, skipping values for duplicates.
- **DENSE_RANK()** - Assigns consecutive ranks without skipping.

#### Example Command:
```sql
SELECT name, age, RANK() OVER(ORDER BY age DESC) AS rank FROM students;
```

---

### 7. **Partitioning & Window Functions**
- **PARTITION BY** - Divides result sets into partitions.
- **LAG()** - Fetches previous row value.

#### Example Command:
```sql
SELECT name, age, RANK() OVER(PARTITION BY age ORDER BY id) FROM students;
```

---

### 8. **Primary & Foreign Keys**
- **Primary Key** - Uniquely identifies records.
- **Foreign Key** - Establishes relationships between tables.

#### Example Command:
```sql
CREATE TABLE enrollments (
    id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    FOREIGN KEY (student_id) REFERENCES students(id) ON DELETE CASCADE ON UPDATE CASCADE
);
```

---

### 9. **ER Diagrams & Normalization**
- **ER Diagrams** - Visual representation of database relationships.
- **Normalization** - Reduces redundancy.
  - **1NF**: Remove duplicate columns.
  - **2NF**: Ensure full dependency.
  - **3NF**: Remove transitive dependencies.

---

### 10. **Stored Procedures & Delimiters**
- **Stored Procedure** - A function that executes SQL statements.
- **DELIMITER** - Used to define multi-line procedures.

#### Example Command:
```sql
DELIMITER $$
CREATE PROCEDURE GetStudentCount()
BEGIN
    SELECT COUNT(*) FROM students;
END $$
DELIMITER;
```

---

### 11. **Triggers**
Triggers execute automatically before or after events like **INSERT, UPDATE, DELETE**.

#### Example Command:
```sql
CREATE TRIGGER before_student_insert
BEFORE INSERT ON students
FOR EACH ROW
SET NEW.created_at = NOW();
```

---

### 12. **Indexing & Performance**
- **INDEX** - Speeds up queries.
- **CLUSTERED INDEX** - Determines row order.
- **NON-CLUSTERED INDEX** - Improves search speed.

#### Example Command:
```sql
CREATE INDEX idx_student_name ON students(name);
```

---

### 13. **ACID Properties**
- **Atomicity** - Ensures all operations in a transaction succeed.
- **Consistency** - Maintains database integrity.
- **Isolation** - Transactions do not interfere with each other.
- **Durability** - Ensures changes are permanent.

---

### 14. **Bitwise Operations**
Bitwise operators perform operations at the binary level.
- **& (AND)**, **| (OR)**, **^ (XOR)**, **~ (NOT)**, **<< (Left Shift)**, **>> (Right Shift)**

#### Example Command:
```sql
SELECT 5 & 3; -- Returns 1
SELECT 5 | 3; -- Returns 7
```

---

### 15. **Other Functions**
- **EXISTS** - Checks if a subquery returns results.
- **ANY** - Checks if any value in a subquery satisfies the condition.
- **CONCAT()** - Combines multiple string values.
- **DATE_FORMAT()** - Formats date values.

#### Example Commands:
```sql
SELECT EXISTS (SELECT * FROM students WHERE name = 'John');
SELECT name FROM students WHERE age = ANY (SELECT age FROM teachers);
SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM students;
SELECT DATE_FORMAT(NOW(), '%Y-%m-%d');
```

---

## Conclusion
This guide covers the essential SQL concepts, commands, and best practices. With these fundamentals, you can build and manage databases efficiently. 🚀


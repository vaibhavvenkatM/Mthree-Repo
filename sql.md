# SQL Basics - Day 1 (10-02-2025)

## What is SQL?

SQL (Structured Query Language) is a standard language used to communicate with and manage databases. It allows users to create, retrieve, update, and delete data from relational databases efficiently.

## DDL (Data Definition Language)

- **CREATE**: Creates new databases, tables, or views.
- **ALTER**: Modifies existing database structures.
- **DROP**: Deletes databases or tables permanently.
- **TRUNCATE**: Removes all records from a table without deleting its structure.

## Common SQL Commands

1. **CREATE DATABASE** - Used to create a new database.
    ```sql
    CREATE DATABASE my_database;
    ```

2. **USE DATABASE** - Selects a specific database for use.
    ```sql
    USE my_database;
    ```

3. **INSERT** - Adds new records to a table.
    ```sql
    INSERT INTO students (id, name, age) VALUES (1, 'John', 20);
    ```

4. **DELETE** - Removes records from a table.
    ```sql
    DELETE FROM students WHERE id = 1;
    ```

5. **ALTER** - Modifies an existing table structure.
    ```sql
    ALTER TABLE students ADD COLUMN email VARCHAR(50);
    ```

6. **TRUNCATE** - Removes all records from a table but keeps the structure.
    ```sql
    TRUNCATE TABLE students;
    ```

7. **DROP** - Deletes an entire table from the database.
    ```sql
    DROP TABLE students;
    ```

8. **PRIMARY KEY** - Ensures unique identification of each record.
    ```sql
    CREATE TABLE students (
        id INT PRIMARY KEY,
        name VARCHAR(50),
        age INT
    );
    ```

9. **ADD CONSTRAINT** - Used to add constraints to existing tables.
    ```sql
    ALTER TABLE students ADD CONSTRAINT unique_email UNIQUE (email);
    ```

10. **DROP CONSTRAINT** - Used to remove constraints from a table.
    ```sql
    ALTER TABLE students DROP CONSTRAINT unique_email;
    ```

11. **TEMPORARY TABLE** - A temporary table exists only during the session.
    ```sql
    CREATE TEMPORARY TABLE temp_students (
        id INT,
        name VARCHAR(50)
    );
    ```

12. **DESC (DESCRIBE)** - Displays the structure of a table.
    ```sql
    DESC students;
    ```

13. **SHALLOW COPY** - A shallow copy creates a new table structure without copying the data.
    ```sql
    CREATE TABLE new_students LIKE students;
    ```

14. **USE A DATABASE IN ANOTHER DATABASE** - Refers to another database while querying.
    ```sql
    SELECT * FROM another_db.students;
    ```

15. **GROUP BY & ORDER BY**
    - `GROUP BY` groups records based on a column.
    - `ORDER BY` sorts records in ascending or descending order.
    ```sql
    SELECT age, COUNT(*) FROM students GROUP BY age ORDER BY age DESC;
    ```

16. **LIKE, AND/OR, HAVING**
    - **LIKE**: Used for pattern matching.
    - **AND/OR**: Used to combine multiple conditions.
    - **HAVING**: Filters grouped records.
    ```sql
    SELECT * FROM students WHERE name LIKE 'A%';
    SELECT * FROM students WHERE age > 20 AND name LIKE 'J%';
    SELECT age, COUNT(*) FROM students GROUP BY age HAVING COUNT(*) > 1;
    ```

## Additional Learnings

- Practical use cases of **TEMPORARY TABLES** in data processing.
- How **SHALLOW COPY** can be used for schema replication.

## My Understanding of the Day – SQL Day 1

Today, I revised my SQL basics and strengthened my understanding of database operations. I covered essential commands like **CREATE**, **ALTER**, **DROP**, **TRUNCATE**, and constraints such as **PRIMARY KEY** and **UNIQUE**.

## What I Was Good At Today

- Revisiting **DDL** commands and understanding their real-world applications.
- Writing and optimizing SQL queries using **GROUP BY**, **ORDER BY**, **HAVING**, and **LIKE**.
- Practicing different filtering techniques using **AND**, **OR**, and pattern matching.

## Highlight of the Day

I felt confident solving SQL problems and applying concepts in **HackerEarth** challenges. Overcame syntax errors and improved debugging skills while writing complex queries.


# Day 2 (11-02-2025)

I joined the afternoon session since I had an interview with **JPMC** in the morning. After joining, I asked my teammates about the topics covered, browsed them for a better understanding, and then started solving **LeetCode** problems.

## Topics Covered

### Joins
Joins are used to combine rows from two or more tables based on a related column. Common types include **INNER**, **LEFT**, **RIGHT**, and **FULL JOIN**.

- **INNER JOIN**: Returns only matching rows from both tables.
- **LEFT JOIN**: Returns all rows from the left table and matching rows from the right table; fills unmatched right-side rows with NULL.
- **RIGHT JOIN**: Returns all rows from the right table and matching rows from the left table; fills unmatched left-side rows with NULL.
- **FULL JOIN**: Returns all rows when there is a match in either table, filling unmatched rows with NULL.

### Union & Intersection
- **Union**: Combines the result sets of two or more `SELECT` queries, removing duplicates unless `UNION ALL` is used.
- **Intersection**: Returns only the common records from two `SELECT` queries, retaining duplicates if present.

### Ranking Functions
- **Rank**: Assigns a unique rank to rows within a partition, with gaps if there are duplicates.
- **Dense Rank**: Similar to **RANK**, but assigns consecutive ranks without gaps for duplicate values.

### Partition
- **Partition**: Divides result sets into groups (partitions) and applies window functions within each partition.

### Boolean Operators
- **Exists**: A boolean operator that checks whether a subquery returns any rows.
- **Any**: Used in comparisons to check if a value satisfies at least one condition in a subquery.

### Bitwise Operators
Bitwise operators like `&`, `|`, `^`, `~`, `<<`, and `>>` perform bit-level operations on integer values.

### Other Functions
- **LAT Function**: Likely referring to `LAT()` in GIS databases, used to extract latitude from geographical coordinates.
- **Date Format**: Converts date values into specific string formats using functions like `FORMAT()`, `TO_CHAR()`, or `DATE_FORMAT()`.

## Additional Learnings from Day 2

- **Ranking Functions**: Understood the difference between **RANK()** and **DENSE_RANK()**, especially how ranks are assigned within partitions.
- **Bitwise Operators**: Discovered how bitwise operations can manipulate and compare integer values at the binary level.
Day 3 (12-02-2025)

<<<<<<< HEAD

# Day 3 (12-02-2025)

=======
>>>>>>> 7fe5907cf051b019927221bb917c2a05c70467e6
Primary Key & Foreign Key

A Primary Key uniquely identifies each record in a table. A Foreign Key establishes a relationship between two tables.

Example SQL Queries:

CREATE TABLE courses (
    course_id INT PRIMARY KEY,
    course_name VARCHAR(100),
    credits INT
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    email VARCHAR(100)
);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE SET NULL
);


);

CREATE TABLE enrollments (
    enrollment_id INT PRIMARY KEY,
    student_id INT,  
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES students(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (course_id) REFERENCES courses(course_id) ON DELETE SET NULL
);

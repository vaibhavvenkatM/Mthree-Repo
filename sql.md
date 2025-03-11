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
Bitwise operators like `&`, `|`, `^`, `~`, `<<`, and `>> perform bit-level operations on integer values.

### Other Functions
- **LAT Function**: Likely referring to `LAT()` in GIS databases, used to extract latitude from geographical coordinates.
- **Date Format**: Converts date values into specific string formats using functions like `FORMAT()`, `TO_CHAR()`, or `DATE_FORMAT()`.

## Additional Learnings from Day 2

- **Ranking Functions**: Understood the difference between **RANK()** and **DENSE_RANK()**, especially how ranks are assigned within partitions.
- **Bitwise Operators**: Discovered how bitwise operations can manipulate and compare integer values at the binary level.


# Day 3 (12-02-2025)

## Primary Key & Foreign Key

A Primary Key uniquely identifies each record in a table. A Foreign Key establishes a relationship between two tables.

**Example SQL Queries:**

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


ON DELETE CASCADE & ON UPDATE CASCADE
ON DELETE CASCADE: When a referenced record is deleted, dependent records are automatically deleted.
ON UPDATE CASCADE: When a referenced record is updated, dependent records are updated as well.

Insert Data:
INSERT INTO students VALUES (1, 'John', 'Doe', 'john.doe@email.com');
INSERT INTO courses VALUES (101, 'Math', 3);
INSERT INTO enrollments VALUES (1, 1, 101, '2024-02-12');



Establishing Relationship Between Tables -  Relationships are created using Foreign Keys.

One-to-Many: A student can enroll in multiple courses, but a course can have many students.

Many-to-Many: Many students can enroll in many courses.

Components of an ER Diagram:
Entities (Tables like students, courses)
Attributes (Columns like first_name, course_name)
Relationships (Foreign Keys in enrollments table)
Primary Key & Foreign Key (Unique identification and table linking)

Delimiter - A Delimiter is used to define the start and end of a stored procedure.

Syntax:
DELIMITER //

END //
DELIMITER ;


Stored Procedure - A Stored Procedure is a set of SQL statements that can be executed as a function.

Syntax:
DELIMITER //
CREATE PROCEDURE sp_add_student (
    IN p_first_name VARCHAR(50),
    IN p_last_name VARCHAR(50),
    IN p_email VARCHAR(100)
)
BEGIN
    INSERT INTO students (first_name, last_name, email) VALUES (p_first_name, p_last_name, p_email);
    SELECT LAST_INSERT_ID() AS student_id;
END //


DELIMITER ;

Stored Procedure with IF-ELSE Logic:

DELIMITER //
CREATE PROCEDURE sp_update_student_email (
    IN p_student_id INT,
    IN p_new_email VARCHAR(100)
) 
BEGIN
    DECLARE existing_email VARCHAR(100);
    SELECT email INTO existing_email FROM students WHERE student_id = p_student_id;
    
    IF existing_email IS NULL THEN
        SELECT 'Student does not exist' AS Message;
    ELSE
        UPDATE students SET email = p_new_email WHERE student_id = p_student_id;
        SELECT 'Email Updated' AS Message;
    END IF;
END //
DELIMITER ;


Drop a Stored Procedure: - DROP PROCEDURE IF EXISTS sp_update_student_email;


Indexes
Used to speed up searches and queries

CREATE INDEX idx_student_email ON students(email);
CREATE UNIQUE INDEX idx_unique_course ON courses(course_name);


Circular Dependency Issue in Foreign Key - A Circular Dependency occurs when two tables reference each other as Foreign Keys, making it impossible to insert data without breaking constraints.

Solution: Use NULLABLE Foreign Keys or insert data in a specific order.

Delete Set NULL
When a referenced row is deleted, the related Foreign Key can be set to NULL instead of deleting dependent rows.

FOREIGN KEY (student_id) REFERENCES studenttttt(student_id) ON DELETE SET NULL;


ER Diagram - An Entity-Relationship (ER) Diagram visually represents database tables and their relationships.

Entities: Tables (e.g., students, courses)

Attributes: Columns (e.g., student_id, course_name)
Relationships: Connections (e.g., One-to-Many between students and enrollments)
Normalization
Normalization organizes data efficiently, reducing redundancy and improving integrity.

1NF (First Normal Form): No duplicate columns or repeating groups.
2NF (Second Normal Form): No partial dependency (all non-key columns depend on the full primary key).
3NF (Third Normal Form): No transitive dependency (non-key columns depend only on the primary key).
Example Queries

Insert Data: - INSERT INTO studenttttt VALUES (1, 'John', 'Doe', 'john.doe@email.com');

Select Data:
SELECT * FROM studenttttt;

Calling a Stored Procedure: - CALL sp_add_employee('Alice', 'Johnson', 'alice.johnson@example.com');

Update Data: - UPDATE employees SET performance_score = 4.5 WHERE emp_id = 1;

Delete Data: - DELETE FROM enrollments WHERE enrollment_id = 2;


Find Students Enrolled in a Course:
SELECT s.first_name, s.last_name, c.course_name 
FROM studenttttt 
JOIN enrollments e ON s.student_id = e.student_id
JOIN courses c ON e.course_id = c.course_id;


Find Courses with No Enrollments:
SELECT course_name FROM courses 
WHERE course_id NOT IN (SELECT DISTINCT course_id FROM enrollments);


Get Total Number of Enrollments per Course:
SELECT c.course_name, COUNT(e.student_id) AS total_enrollments 
FROM courses c
LEFT JOIN enrollments e ON c.course_id = e.course_id
GROUP BY c.course_name;


Additional Learnings
ON DELETE SET NULL - When a referenced row is deleted, the foreign key column is set to NULL instead of deleting the row
 Cascading Updates - Foreign key values update automatically if the referenced primary key changes (ON UPDATE CASCADE).. 


# Day 4 (13-02-2024)

## CONCAT

The `CONCAT` function in SQL is used to combine two or more strings into a single string.

**Syntax:**


SELECT CONCAT(string1, string2, ...);


Example:

SELECT CONCAT(first_name, ' ', last_name) AS full_name FROM employees;

This will combine the `first_name` and `last_name` columns to create a full name.



## INDEX

Indexes in SQL are used to enhance the performance of queries by reducing the time required to retrieve records.

**Syntax:**


CREATE INDEX index_name ON table_name (column_name);


Example:


CREATE INDEX idx_employee_name ON employees (last_name);


This creates an index on the `last_name` column of the `employees` table to speed up search queries.



## TRIGGERS

A trigger is a set of SQL statements that are automatically executed when a specific event occurs in the database.

**Syntax:**

CREATE TRIGGER trigger_name
AFTER INSERT ON table_name
FOR EACH ROW
BEGIN
   -- SQL Statements
END;

Example:

CREATE TRIGGER after_employee_insert
AFTER INSERT ON employees
FOR EACH ROW
BEGIN
   INSERT INTO audit_log (action, employee_id, timestamp)
   VALUES ('INSERT', NEW.employee_id, NOW());
END;

This trigger will insert a log entry into the `audit_log` table whenever a new employee is inserted into the `employees` table.



## COALESCE

The `COALESCE` function returns the first non-null value from a list of values.

**Syntax:**

SELECT COALESCE(value1, value2, ...);


Example:

SELECT COALESCE(phone_number, 'No phone number available') AS contact_number FROM customers;


This will return the `phone_number` if it's not null, or "No phone number available" if `phone_number` is null.
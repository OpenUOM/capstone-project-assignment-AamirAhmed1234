import sqlite3

# Connect to the database
def get_db_connection():
    conn = sqlite3.connect('school.db')  # Adjust your database file path if needed
    conn.row_factory = sqlite3.Row
    return conn

# 1. Read all students' data
def readStudents():
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students")  # Assuming 'students' is the table name
    students = cursor.fetchall()
    conn.close()
    return students

# 2. Read the information of a specific student by student_id
def readStudentInfo(student_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("SELECT * FROM students WHERE student_id = ?", (student_id,))
    student = cursor.fetchone()
    conn.close()
    return student

# 3. Add a new student
def addStudent(student_data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("INSERT INTO students (student_id, first_name, last_name, age, grade) VALUES (?, ?, ?, ?, ?)",
                   (student_data['student_id'], student_data['first_name'], student_data['last_name'],
                    student_data['age'], student_data['grade']))
    conn.commit()
    conn.close()

# 4. Update a student's details by student_id
def updateStudent(student_id, updated_data):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("""UPDATE students 
                      SET first_name = ?, last_name = ?, age = ?, grade = ? 
                      WHERE student_id = ?""", 
                   (updated_data['first_name'], updated_data['last_name'], 
                    updated_data['age'], updated_data['grade'], student_id))
    conn.commit()
    conn.close()

# 5. Delete a student by student_id
def deleteStudent(student_id):
    conn = get_db_connection()
    cursor = conn.cursor()
    cursor.execute("DELETE FROM students WHERE student_id = ?", (student_id,))
    conn.commit()
    conn.close()

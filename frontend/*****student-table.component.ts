import { Component } from '@angular/core';

@Component({
  selector: 'app-student-table',
  templateUrl: './student-table.component.html',
  styleUrls: ['./student-table.component.css']
})
export class StudentTableComponent {
  studentData = [
    { id: 1, firstName: 'Alice', lastName: 'Brown' },
    { id: 2, firstName: 'Bob', lastName: 'Davis' },
    { id: 3, firstName: 'Charlie', lastName: 'Miller' },
    // other student data...
  ];

  // This will hold the filtered list of students
  filteredStudentData = [...this.studentData];

  // Search function for students by name
  searchStudent(searchText: string): void {
    if (searchText.trim() === '') {
      // If search is empty, show all students
      this.filteredStudentData = [...this.studentData];
    } else {
      // Filter students by first or last name, case-insensitive
      this.filteredStudentData = this.studentData.filter(student =>
        student.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        student.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
}

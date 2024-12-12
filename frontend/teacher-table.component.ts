import { Component } from '@angular/core';

@Component({
  selector: 'app-teacher-table',
  templateUrl: './teacher-table.component.html',
  styleUrls: ['./teacher-table.component.css']
})
export class TeacherTableComponent {
  teacherData = [
    { id: 1, firstName: 'John', lastName: 'Doe' },
    { id: 2, firstName: 'Jane', lastName: 'Smith' },
    { id: 3, firstName: 'Paul', lastName: 'Jones' },
    // other teacher data...
  ];

  // This will hold the filtered list of teachers
  filteredTeacherData = [...this.teacherData];

  // Search function for teachers by name
  searchTeacher(searchText: string): void {
    if (searchText.trim() === '') {
      // If search is empty, show all teachers
      this.filteredTeacherData = [...this.teacherData];
    } else {
      // Filter teachers by first or last name, case-insensitive
      this.filteredTeacherData = this.teacherData.filter(teacher =>
        teacher.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
        teacher.lastName.toLowerCase().includes(searchText.toLowerCase())
      );
    }
  }
}

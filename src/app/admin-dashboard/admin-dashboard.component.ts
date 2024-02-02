import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface StudentInterface{
  firstname: string,
  lastname: string,
  email: string,
  address: string,
  password: string,
  gender: string,
  matric: string,
}

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent implements OnInit {
 
  public students: StudentInterface[] = [];

  constructor() { }

  ngOnInit(): void {
    this.loadStudents();
  }

 loadStudents(): void {
  const students = localStorage.getItem('newstudents');
  console.log('Retrieved students:', students); // Check what's retrieved
  if (students) {
    this.students = JSON.parse(students);
    console.log('Parsed students:', this.students); // Check the parsed data
  }
}

editStudent(index: number): void {
  // Implement your edit logic here.
  // This could involve setting a 'currentStudent' property to the student being edited
  // and possibly showing a form where you can edit the student details.
  console.log('Editing student at index', index);
}

deleteStudent(index: number): void {
  // Implement your delete logic here.
  // This could involve removing the student from the 'students' array
  // and then updating localStorage.
  this.students.splice(index, 1); // Remove the student from the array
  localStorage.setItem('newstudents', JSON.stringify(this.students)); // Update localStorage
  console.log('Deleted student at index', index);
}

  
  
}

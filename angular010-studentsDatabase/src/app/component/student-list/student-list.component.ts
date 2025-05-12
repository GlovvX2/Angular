import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { RouterModule } from '@angular/router';
import { StudentsService } from '../../services/students.service';
@Component({
  selector: 'app-student-list',
  imports: [RouterModule],
  templateUrl: './student-list.component.html',
  styleUrl: './student-list.component.css'
})
export class StudentListComponent {
  stud:Student[] = [];

  constructor(private service: StudentsService){
    this.stud = service.getAllStudents();
  }
}

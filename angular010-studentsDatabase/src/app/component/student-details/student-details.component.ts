import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Student } from '../../models/student';
import { StudentsService } from '../../services/students.service';
import { AppComponent } from "../../app.component";

@Component({
  selector: 'app-student-details',
  imports: [RouterModule, AppComponent],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {

  
  stud:  Student | null = null;
  constructor(private service:StudentsService ,private route:ActivatedRoute ){
    route.params.subscribe(params=>
    {
      let id = Number(params['id']);
      this.stud = service.getStudentById(id);
    });
  }
}

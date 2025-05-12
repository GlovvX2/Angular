import { Injectable } from '@angular/core';
import { Student } from '../models/student';
import { students } from '../data/students';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
  students:Student[] = students;  

  constructor() { }

  public getAllStudents():Student[]
  {
    return this.students;
  }
  public getStudentById(id:number):Student | null
  {
    let student = this.students.find(student=>student.id === id)
    return student || null;
  }
}

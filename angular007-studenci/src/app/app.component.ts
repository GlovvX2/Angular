import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { studentsData } from './data/studens-data';
import { Student } from './models/student';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular007-studenci';

  students:Student[] = studentsData;

  //funckja zmieniajaca kolor

  mapGradeToColor(grade:number):string
  {
    if(grade>=6)
      return '#4BB';
    if(grade>=5)
      return '#4C4';
    if(grade>=4)
      return '#DB4';
    if(grade>=3)
      return '#D74';
    return '#C45'
  }

  searchName:string = '';

  search()
  {
    this.students=studentsData.filter(student=>
      
      student.lastName.toLowerCase().indexOf(this.searchName.trim().toLowerCase()) >= 0);
  }

  // dodawanie studenta
  dialogNew: boolean = false;
  newId:string="";
  newFirstName: string = "";
  newLastName: string = "";
  newAge: number | null = null;
  newLeader: boolean = false;

  addStudent()
  {
    //dodawanie nowego studenta do tablicy

    if(this.newAge)
    {
      studentsData.unshift({           // unshift dodaje z przodu tablicy
        id:this.generateID(),
        firstName: this.newFirstName,   // push dodaje z tyłu tablicy
        lastName: this.newLastName, 
        age: this.newAge, 
        grades: [],
        isLeader: this.newLeader
      });
    }

    this.search();
    this.newFirstName = "";
    this.newLastName = "";
    this.newAge = null;
    this.newLeader = false;

    this.dialogNew = false;
  }

  cancelStudent()
  {
    this.newFirstName = "";
    this.newLastName = "";
    this.newAge = null;
    this.newLeader = false;

    this.dialogNew = false;
  }
  
  LettersAndNumbers:string[]=['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',"0","1","2","3","4","5","6",'7',"8","9"]
  generateID()
  {
    let id ="";
    for(let i=0;i<4;i++)
    {
      let x = Math.floor(Math.random() *this.LettersAndNumbers.length);
      id+=this.LettersAndNumbers[x];
    }
    return id;
  }


  //Usuwanie studenta
  dialogRemove:boolean = false;
  idToRemove:string='';
  removeStudentQuery(id:string)
  {
    this.dialogRemove=true;
    this.idToRemove= id;

  }
  removeStudent()
  {
    const index = studentsData.findIndex(student=> student.id == this.idToRemove);
    studentsData.splice(index,1);
    this.search();
    this.dialogRemove=false;

  }
  cancelRemove()
  {
    this.dialogRemove=false;
  }
  //Dodawanie ocen
  dialogGrade:boolean=false;
  idGrade:string="";
  addStudentGrade(id:string)
  {
    this.dialogGrade=true;
    this.idGrade=id;
  }
  addGrade(grade:number)
  {
    const index = studentsData.findIndex(student=> student.id == this.idGrade);
    studentsData[index].grades.push(grade);
    this.search();
    this.dialogGrade=false;
  }
  cancelGrade()
  {
    this.dialogGrade=false;
  }
}

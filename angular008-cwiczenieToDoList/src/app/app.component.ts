import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListData } from './data/list-data';
import { FormsModule } from '@angular/forms';
import { ListToDo } from './models/list';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular008-cwiczenieToDoList';

  lista:ListToDo[]=ListData;

  zadanie:string="";

  addZadanie()
  {
    if(this.zadanie)
    {
        ListData.push({
          toDo: this.zadanie,
          isItDone:false
        })
    
      }
      this.search();
  }
  stringToRemove:string='';
  search()
  {
    this.lista=ListData.filter(lista=>lista.isItDone == false);
  }
  removeZadanie()
  {
      this.search();
  }
 
}

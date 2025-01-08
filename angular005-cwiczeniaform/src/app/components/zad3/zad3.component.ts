import { Component, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zad3',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './zad3.component.html',
  styleUrl: './zad3.component.css'
})
export class Zad3Component {
  base:string = "Najpierw wybierz wersje pobierz";
  output:string="linki";
  selectInstaler()
  {
    this.output = this.base;
  }
}

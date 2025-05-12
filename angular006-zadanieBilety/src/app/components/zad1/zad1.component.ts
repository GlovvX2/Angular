import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zad1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './zad1.component.html',
  styleUrl: './zad1.component.css'
})
export class Zad1Component {
  sectorA:number = 0;
  sectorB:number = 0;
  sectorC:number = 0;
  output:number = 0;
  cal()
  {
    this.output=0;
    this.output += this.sectorA * 150;
    this.output += this.sectorB * 100;
    this.output += this.sectorC * 80;

  }
}

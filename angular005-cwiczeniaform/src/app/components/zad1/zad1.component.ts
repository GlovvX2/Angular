import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-zad1',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './zad1.component.html',
  styleUrl: './zad1.component.css'
  
})
export class Zad1Component {
  login:string = "";
  password:string = "";
  statusLogin="nie";
  statusPassword="nie";
  valid()
  {
    if(this.login.length > 0 )
      this.statusLogin="tak";
    else 
      this.statusLogin="nie";

    if(this.password.length >= 8 )
      this.statusPassword="tak";
    else 
      this.statusPassword="nie";
  }
}

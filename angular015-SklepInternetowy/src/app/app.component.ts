import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { product } from '../../model/produkty';
import { SerwisService } from '../../services/serwis.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  szukane:string = "";
  constructor(private service: SerwisService)
  {
  }
}

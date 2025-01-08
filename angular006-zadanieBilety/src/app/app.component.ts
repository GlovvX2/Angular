import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zad1Component } from "./components/zad1/zad1.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Zad1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular006-zadanieBilety';
}

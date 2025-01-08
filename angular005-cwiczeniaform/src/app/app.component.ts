import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zad1Component } from "./components/zad1/zad1.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Zad2Component } from "./components/zad2/zad2.component";
import { Zad3Component } from "./components/zad3/zad3.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, Zad1Component, CommonModule, Zad2Component, Zad3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="";
}

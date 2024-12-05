import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Zad1Component } from "./components/zad1/zad1.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule ,Zad1Component,CommonModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title="";
}

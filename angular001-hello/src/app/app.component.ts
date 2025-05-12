import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { dataSkills } from '../data/skills';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = 'Hello in Angular';

  // Pola klasy
  name: string = 'Alex';
  age: number = 16;
  isLeader: boolean = false;
  skills: string[] = ['programmer', 'graphics designer', 'cook'];
  exam: string = '2024-11-14 17:00';

  // Metody
  isAdult(): boolean
  {
    return this.age >= 18;
  }

  hello()
  {
    alert("Działa!");
  }

  updateTitle()
  {
    this.title = "Hello in Angular tutorial V.2";
  }

  makeAlexOlder()
  {
    this.age++;
  }

  addSkill()
  {
    let index = Math.floor(Math.random() * dataSkills.length);
    let skill = dataSkills[index];
    this.skills.push(skill);
  }

  // Wybór stopnia trudności
  difficulties: string[] = ['EASY', 'NORMAL', 'HARD', 'ULTIMATE'];
  selected: number = 1;

  lower()
  {
    if (--this.selected < 0)
      this.selected = this.difficulties.length - 1;
  }

  higher()
  {
    if (++this.selected > this.difficulties.length - 1)
      this.selected = 0;  
  }

  // Mechanizm podmiany obrazków
  imageURL: string = 'images/git-blue.png';

  blueImage()
  {
    this.imageURL = 'images/git-blue.png';
  }

  redImage()
  {
    this.imageURL = 'images/git-red.png';
  }

  greenImage()
  {
    this.imageURL = 'images/git-green.png';
  }

  // Blokowanie
  locked: boolean = false;

  // Testowanie klas
  isError: boolean = false;

  // Testowanie stylów
  letterSpacing: number = 0;

}

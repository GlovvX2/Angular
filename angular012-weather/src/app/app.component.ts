import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherService } from './services/weather.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular012-weather';

  temp:number = 0;
  humidity:number = 0;
  description:string = " -";
  pressure:number = 0;
  wind:number=0;

  city:string = "";

  constructor(private service: WeatherService)
  {
    this.updateWeather();
  }
  updateWeather()
  {
    this.service.getWeather(this.city).subscribe(data=>
    {
      this.temp = data.main.temp;
      this.humidity = data.main.humidity;
      this.description = data.weather[0].description;
      this.pressure = data.main.pressure;
      this.wind = data.wind.speed;
    });
  }
}

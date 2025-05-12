import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeather(city: String):Observable<any>
  {
    return this.http.get<any>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=16cdd298cf000ae5f994aa1bc9cc6a7e&units=metric`);
  }
}

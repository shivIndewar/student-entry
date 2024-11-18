import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoserviceService {

  constructor(private http : HttpClient) { }

  logWheatherInfo(){
    return this.http.get("https://localhost:7164/api/WeatherForecast");
  }

}

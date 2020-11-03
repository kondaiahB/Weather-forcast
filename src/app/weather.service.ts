import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {observable} from 'rxjs/observable'
//import {ErrorObservable} from 'rxjs/observable/EmptyObservable';
import {  throwError } from 'rxjs';
//import {Observable} from 'rxjs/Rx';

import 'rxjs/add/operator/catch';
@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  apiUrl: string = 'http://api.openweathermap.org/';

  constructor(private http: HttpClient) { }

  currentdata(cityname, key) {
    return this.http.get(`${this.apiUrl}data/2.5/weather?q=${cityname}&appid=${key}`)
    .catch(this.handleError);
  }
  hourlydata(cityname, key) {
    return this.http.get(`http://pro.openweathermap.org/data/2.5/forecast/hourly?q=${cityname}&appid=${key}`)
    .catch(this.handleError);
    
  }
  sixteendaysdata(cityname, key) {
    return this.http.get(`${this.apiUrl}data/2.5/find?q=${cityname}&appid=${key}`)
    .catch(this.handleError);
  }
  private handleError(errorResponse: HttpErrorResponse){
    if(errorResponse.error instanceof ErrorEvent){
      console.error('Clints Side Error:', errorResponse.error.message)
    }else{
      console.error('Server Side Error:', errorResponse)
    }
    return throwError('this is a problem with the service. We are notifing and working on it. Please try again later')
  }
}

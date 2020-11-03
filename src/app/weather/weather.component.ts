import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  _currentdata: boolean = false;
  _hourlydata: boolean = false;
  _16daysdata: boolean = false;
  _searchcity: boolean = false;
  title: string = "Get correct weather details";
  selected;
  errorApi: boolean = false;
  constructor(private service: WeatherService, private http: HttpClient) { }
  ngOnInit(): void {
  }
  cityname: any;
  selct: any;
  key: any = 'a40dda2f15e4bf7b505563f7cb8361af';
  weather: any;
  searchcity() {
    if (this._currentdata) {
      this.service.currentdata(this.cityname, this.key).subscribe((res) => {
        this.weather = res;
        this.title = "Current Weather Report"
        this._searchcity = true;
      }, (err) => {
        this.errorApi = true;
        console.error(err);
        alert(err);
        alert('city name  ' + this.cityname + ' not found')
      })
    } else if (this._hourlydata) {
      console.log('hourly search');
      this.service.hourlydata(this.cityname, this.key).subscribe((res) => {
        this.weather = res;
        this.title = "Hourly Forecast Report";
        this._searchcity = true;
      }, (err) => {
        alert(err);
        alert('city name  ' + this.cityname + ' not found')
      })
    } else if (this._16daysdata) {
      this.service.sixteendaysdata(this.cityname, this.key).subscribe((res) => {
        this.weather = res;
        this.title = "Daily Forecast 16 Days Report"
        this._searchcity = true;
      }, (err) => {
        alert(err);    
        alert('city name  ' + this.cityname + ' not found')
      })
    }
  }
  forecastOption(event) {
    switch (event.target.value) {
      case ('current'): {
        this._currentdata = true;
        this._hourlydata = false;
        this._16daysdata = false;
        break
      }
      case ('hourly'): {
        this._hourlydata = true;
        this._currentdata = false;
        this._16daysdata = false;
        break
      }
      case ('16-days'): {
        this._16daysdata = true;
        this._currentdata = false;
        this._hourlydata = false;
        break
      }
      default: {
        this._currentdata = true;
      }
    }
  }
}

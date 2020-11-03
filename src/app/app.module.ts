import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { WeatherComponent } from './weather/weather.component';
import {HttpClientModule} from '@angular/common/http'
import { RouterModule } from '@angular/router';
import { WeatherService } from './weather.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//import {MatInputModule} from '@angular/material/input';
//import {MatCardModule} from '@angular/material/card';
//import {MatCardHarness} from '@angular/material/card/testing';
import {MatCardModule} from '@angular/material/card';
@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, RouterModule, FormsModule, ReactiveFormsModule, MatCardModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { 
 
}
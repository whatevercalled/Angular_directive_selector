import { Injectable } from '@angular/core';
import { WeatherTimeState } from '../Components/weather-widget/interfaces/WeatherTimeState';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  state:WeatherTimeState={
    'lastUpdateAt':new Date()
  }

  reload(){
    this.state.lastUpdateAt = new Date();
    console.log('Reloads widget data...');

  }
  copyData(){
    console.log('Copy widget data into clipboard...');
  }
  constructor() { }
}

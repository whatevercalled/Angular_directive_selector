import { Component} from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';

@Component({
  selector: 'app-weather-custom-action',
  standalone: true,
  imports: [],
  templateUrl: './weather-custom-action.component.html',
  styleUrl: './weather-custom-action.component.scss',

})
export class WeatherCustomActionComponent {
    // weatherWidget=inject(WeatherWidgetComponent);
    constructor(public weatherWidget:WeatherWidgetComponent){
    }
    onReloadCopyClick(){
      this.weatherWidget.actions.reload();
      this.weatherWidget.actions.copyData();
    }
}

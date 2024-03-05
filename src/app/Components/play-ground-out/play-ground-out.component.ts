import { Component, ViewChild} from '@angular/core';
import { WeatherWidgetComponent } from '../weather-widget/weather-widget.component';
import { WeatherCustomActionComponent } from '../weather-custom-action/weather-custom-action.component';
@Component({
  selector: 'app-play-ground-out',
  standalone: true,
  imports: [WeatherWidgetComponent,WeatherCustomActionComponent],
  // templateUrl: './play-ground-out.component.html',
  styleUrl: './play-ground-out.component.scss',
  template: `
    <app-weather-widget
      [headerTemplate]="altWidgetHeader"
      [contentTemplate]="altWidgetContent"
      [actionTemplate]="altAction"
    ></app-weather-widget>
    <ng-template #altWidgetHeader>
      <div class="alt-header">Today's weather</div>
    </ng-template>
    <ng-template #altWidgetContent let-state>
      <div>
        <span>🌡 {{state.data.temperature}}°C</span> -
        <span>{{state.data.skyCondition === 'sunny' ? '☀️' : '☁️'}}</span> -
        <span>🌬️ {{state.data.windspeed}}m/s</span>
      </div>
    </ng-template>
    <ng-template #altAction>
      <!-- <button></button> -->

      <app-weather-custom-action></app-weather-custom-action>
    </ng-template>
  `,
})
export class PlayGroundOutComponent {
  @ViewChild('altAction') aaaa:any;
  ngAfterViewInit(): void {

  }
}



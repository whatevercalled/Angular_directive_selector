import { Component, Injector, Input, TemplateRef, inject } from '@angular/core';
import { CommonModule} from '@angular/common';
import { WeatherStateInterface } from './interfaces/WeatherState';
import { ActionService } from '../../Services/action.service';

@Component({
  selector: 'app-weather-widget',
  standalone: true,
  imports: [CommonModule],
  // templateUrl: './weather-widget.component.html',
  styleUrl: './weather-widget.component.scss',
  template: `
  <!-- header -->
  <div class="widget-header">
    <ng-container [ngTemplateOutlet]="headerTemplate || defaultWidgetHeader"></ng-container>
    <ng-template #defaultWidgetHeader>
      <div class="widget-title">Weather Forecast</div>
      <div class="widget-sub-title">Current weather in your location</div>
    </ng-template>
  </div>
  <!-- content -->
  <div class="widget-content">
    <ng-container
      [ngTemplateOutlet]="contentTemplate || defaultWidgetContent"
      [ngTemplateOutletContext]="{ $implicit: state }"></ng-container>
    <ng-template #defaultWidgetContent>
      <div class="sky-condition">{{ state.data.skyCondition === 'sunny' ? '☀️' : '☁️' }}</div>
      <div class="temperature">{{state.data.temperature}}°C</div>
    </ng-template>
  </div>
  <!-- actions -->
  <div class="widget-actions">

    <ng-container
      [ngTemplateOutlet]="actionTemplate || defaultWidgetAction"
      [ngTemplateOutletInjector]="injector"
    ></ng-container>
    <ng-template #defaultWidgetAction>
      <button (click)="actions.reload()">Reload</button>
      <button (click)="actions.copyData()">Copy Info</button>
    </ng-template>
  </div>
`,
})
export class WeatherWidgetComponent {
  state:WeatherStateInterface={
    'data':{
      skyCondition:'sunny',
      temperature:"20",
    }
  }
  constructor(public actions:ActionService,public injector:Injector){

  }
  @Input()
  headerTemplate:TemplateRef<any>|undefined;
  @Input()
  contentTemplate:TemplateRef<any>|undefined;
  @Input()
  actionTemplate:TemplateRef<any>|undefined;


}

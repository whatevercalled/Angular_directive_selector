import { Component,ViewChildren,signal,computed, QueryList,AfterViewInit, viewChild, viewChildren, ViewChild, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselPageDirective } from '../../Directives/carousel-page.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-page',
  standalone: true,
  imports: [CommonModule,CarouselPageDirective],
  // templateUrl: './change-page.component.html',
  styleUrl: './change-page.component.scss',
  template: ` <ng-template appCarouselPage> Page 1 </ng-template>
  <ng-template appCarouselPage> Page 2 </ng-template>
  <ng-template appCarouselPage> Page 3 </ng-template>
  <ng-container *ngTemplateOutlet="displayPage()"></ng-container>
  <button (click)="onSwitchPageClick()">切換頁面</button>
  `

})
export class ChangePageComponent {

 
  carouselPages=viewChildren<CarouselPageDirective>(CarouselPageDirective); //signal queries

  index = signal(0);
  
  displayPage=computed(()=>{

    return this.carouselPages()?.find(
      (_, index) => index === this.index()
    )!.templateRef;
  })
  onSwitchPageClick(){

    this.index.update((x)=>{
      return (x+1)%3; //最多只有三頁
    })
  }
}

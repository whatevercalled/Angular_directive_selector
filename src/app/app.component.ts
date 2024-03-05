import { Component,TemplateRef,ViewChildren,ViewChild,  QueryList,AfterViewInit, viewChild, viewChildren, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselPageDirective } from './carousel-page.directive';
import { CommonModule,NgTemplateOutlet } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,CarouselPageDirective],
  // templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  template: ` <ng-template appCarouselPage #555666 > Page 1 </ng-template>
    <ng-template appCarouselPage> Page 2 </ng-template>
    <ng-template appCarouselPage> Page 3 </ng-template>
    <ng-container *ngTemplateOutlet="displayPage"></ng-container>
    <button (click)="printElements">123232</button>`

})
export class AppComponent implements AfterViewInit{
  // @ViewChildren('555666') somethingArr:any;
  // @ViewChild('555666') something:any;
  @ViewChildren(CarouselPageDirective) carouselPages!:QueryList<CarouselPageDirective>;
  displayPage!: TemplateRef<any>;
  index = 0;
 
  setDisplayPage() {
    console.log(this.carouselPages);
    this.displayPage = this.carouselPages.find(
      (_, index) => index === this.index
    )!.templateRef;
  }
 
  ngAfterViewInit() {
    // this.setDisplayPage();
    // console.log(this.somethingArr);
    // console.log(this.something);
    console.log(this.carouselPages);
    
  }
  printElements(){
    console.log(this.carouselPages) // Empty
  }
  title = 'yunshin_templateSyntax';
}

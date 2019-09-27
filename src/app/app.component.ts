import { Component } from '@angular/core';
import { HostListener } from '@angular/core';

import { Directive, ElementRef } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private movable: boolean;
  private topOffset: number;
  private leftOffset: number;

  constructor(private elementRef: ElementRef){
    this.topOffset  = 0;
    this.leftOffset = 0;
  };

  onLongPress(event: any){
    this.movable = event;
  }

  roundValue(num: number){
    return Math.floor(num/50)*50;
  }

  @HostListener('mousemove', ['$event'])
  mouseMove(event){
    if(this.movable){
      if(this.topOffset != this.roundValue(event.clientY)){
        this.topOffset = this.roundValue(event.clientY);
      }

      if(this.leftOffset != this.roundValue(event.clientX)){
        this.leftOffset = this.roundValue(event.clientX);
      }

      console.log(`x:${this.topOffset}, y:${this.leftOffset}`);
    }
  }

}

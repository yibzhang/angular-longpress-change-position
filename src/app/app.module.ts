import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { LongPress } from './long-press';

import { AppComponent } from './app.component';
import { MovingBlockComponent } from './moving-block/moving-block.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, LongPress, MovingBlockComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

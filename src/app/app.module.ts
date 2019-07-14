import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TimeInputComponent } from './time-input/time-input.component';
import { HourCalcComponent } from './hour-calc/hour-calc.component';

@NgModule({
  declarations: [
    AppComponent,
    TimeInputComponent,
    HourCalcComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

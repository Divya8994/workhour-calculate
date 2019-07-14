import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'hour-calc',
  templateUrl: 'hour-calc.component.html',
  styleUrls: [
    'hour-calc.component.css'
  ]
})

/**
 * This component handles the calculation of the approximate hourly pay
 * of the user based on the value passed by the time-input component
 * and the hourly-pay input entered by the user
 */

export class HourCalcComponent {
  private _payRate: number;
  private _totalHour: Date; // This variable will be used to store the number of hours returned by the input-time component
  private _totalHours: number; 

  constructor() { }

  calcGrossSalary(): number{
    return this._payRate * this._totalHours;
  }

}

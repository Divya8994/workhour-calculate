import { Component } from '@angular/core';
@Component({
  selector: 'time-input',
  templateUrl: 'time-input.component.html',
  styles: []
})
export class TimeInputComponent {
  _timeIn: string;
  _lunchOut: string;
  _lunchIn: string;
  _timeOut: string;
  
  constructor() { }

  goodPair(): boolean {
    return ((this._timeIn !== undefined) && (this._timeIn !== "")) && ((this._timeOut !== undefined) && (this._timeOut !== "")) ||
    ((this._lunchOut !== undefined) && (this._lunchOut !== "")) && ((this._lunchIn !== undefined) && (this._lunchIn !== ""));
  }

}

import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[maxmin]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: MaxMinDirective, multi: true }
  ]
})
export class MaxMinDirective implements Validator {

  @Input("maxmin") maxmin: any;
  constructor() { }
  validate(control: AbstractControl): ValidationErrors {
    if (control.value > this.maxmin.max) {
      return {max:true};
    }
    if (control.value < this.maxmin.min) {
      return {min:true};
    }
    return null;
  }
}
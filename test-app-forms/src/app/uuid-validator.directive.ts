import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';
import { UuidValidatorFn } from './uuid-validator-fn';

@Directive({
  selector: '[appUuidValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UuidValidatorDirective,
      multi: true
    }
  ]
})
export class UuidValidatorDirective implements Validator {
  validate(control: AbstractControl) {
    return UuidValidatorFn(control);
  }
}

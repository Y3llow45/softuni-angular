import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { Directive } from '@angular/core';

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
export class UuidValidatorDirective {

  validate(control: AbstractControl) {
    return (control.value || !control.value.startsWith('00-')) ? (invalidUUID: true) : null;
  }

}

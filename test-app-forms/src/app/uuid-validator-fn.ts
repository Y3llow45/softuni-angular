import { AbstractControl } from "@angular/forms";

export function UuidValidatorFn (control: AbstractControl) {
    return (control.value || !control.value.startsWith('00-')) ? (invalidUUID: true) : null;

}//1:48:48
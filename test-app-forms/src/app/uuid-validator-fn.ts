import { AbstractControl } from "@angular/forms";

export function UuidValidator (config?: string) {
    return function UuidValidatorFn (control: AbstractControl) {
        return (!control.value || !control.value.startsWith(config || '00-')) ? {invalidUUID: true} : null;
    }
}
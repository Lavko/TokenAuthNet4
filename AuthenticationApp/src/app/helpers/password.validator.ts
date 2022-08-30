import {AbstractControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.value as string;
    const regex =
      /^(?=.*[A-Z])(?=.*[\W])(?=.*[0-9])(?=.*[a-z]).{6,128}$/g;

    let valid = regex.test(password);
    return valid ? null : {password: {value: control.value}};
  };
}

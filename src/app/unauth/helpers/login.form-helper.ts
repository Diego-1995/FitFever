import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDto } from '../dto/login.dto';

@Injectable()
export class LoginFormHelper {
  form!: FormGroup;

  constructor(private _fb: FormBuilder) {
    this.form = this.initForm();
  }

  initForm(): FormGroup {
    return this._fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
    });
  }

  get loginDto(): LoginDto {
    const formValues = this.form.getRawValue();
    return formValues;
  }
}

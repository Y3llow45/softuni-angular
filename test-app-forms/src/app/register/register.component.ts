import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidValidator } from '../uuid-validator-fn';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit{
  addressCount = 0;
  form!: FormGroup;

  constructor (private fb: FormBuilder) {
    this.buildForm();
  }

  addAddress() {
    this.addressCount++;
    this.buildForm();
  }

  buildForm() {
    /*this.form = new FormGroup({
      uuid: new FormControl(null, [UuidValidator('11-')]),
      email: new FormControl('Test', [Validators.required, Validators.minLength(10)], )
    });*/
    this.form = this.fb.group({
      uuid: [null, [UuidValidator('11-')]],
      email: ['Test', [Validators.required, Validators.minLength(10)]],
      addresses: this.fb.array(
        new Array(10).fill(null).map((_, index) => ({
          street: ['', [Validators.required]],
          postCode: [null]
        }))
      )
    });
  }

  get emailControl() {
    return this.form.get('email')
  }

  get uuidControl() {
    return this.form.get('uuid')
  }

  ngOnInit(): void {
  }
}

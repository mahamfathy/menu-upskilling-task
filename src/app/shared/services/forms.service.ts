import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FormsService {
  form!: FormGroup;
  constructor() {}
  createContactForm(form: FormBuilder) {
    return form.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', Validators.required],
      phone: ['', Validators.required],
    });
  }
}

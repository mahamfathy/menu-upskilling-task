import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { contactApiUrl } from '../shared/firebase/firebase-url';
import { FirebaseService } from '../shared/services/firebase.service';
import { FormsService } from '../shared/services/forms.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'],
})
export class ContactUsComponent {
  form!: FormGroup;
  constructor(
    private formsService: FormsService,
    private firebaseService: FirebaseService
  ) {
    this.form = this.formsService.createContactUsForm();
  }
  onSubmit() {
    const formValue = this.form.value;
    const headers = { 'Content-Type': 'application/json; charset=utf-8' };

    this.firebaseService
      .postRequest(contactApiUrl, formValue, headers)
      .subscribe();
    this.form.reset();
  }
}

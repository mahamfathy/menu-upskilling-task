import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormsService } from '../shared/services/forms.service';
import { SharedModule } from '../shared/shared.module';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.scss',
})
export class ContactUsComponent {
  form!: FormGroup;
  constructor(private formsService: FormsService) {
    this.form = this.formsService.createContactUsForm();
  }
  onSubmit() {
    console.log(this.form);
  }
}

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.css',
})
export class ContactMeComponent {
  myForm: FormGroup;
  name: FormControl;
  email: FormControl;
  subject: FormControl;
  message: FormControl;
  to: FormControl;
  submitted = false;
  isLoading = false;
  showToast = false;
  toastMessage = '';
  constructor() {
    this.initFormControl();
    this.createForm();
  }
  initFormControl() {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
    this.email = new FormControl('', [Validators.required, Validators.email]);
    this.to = new FormControl(
      { value: 'ahmedelyamany.mohamed@gmail.com', disabled: true },
      [Validators.required, Validators.email]
    );
    this.subject = new FormControl('', [Validators.required]);
    this.message = new FormControl('', [Validators.required]);
  }
  createForm() {
    this.myForm = new FormGroup({
      name: this.name,
      email: this.email,
      to: this.to,
      subject: this.subject,
      message: this.message,
    });
  }
  onSubmit() {
    this.submitted = true;

    if (this.myForm.invalid) {
      this.showToastMessage('Please fill all required fields.');
      return;
    }
    this.isLoading = true;

    const formData = {
      from_name: this.name.value,
      reply_to: this.email.value,
      subject: this.subject.value,
      message: this.message.value,
      to_email: this.to.value || 'ahmedelyamany.mohamed@gmail.com',
    };

    emailjs
      .send(
        'service_91oxh2v',
        'template_0h5wqqh',
        formData,
        '4CwRBZsf9sSM5lWFs'
      )
      .then(
        () => {
          this.isLoading = false;
          this.showToastMessage('✅ Message sent successfully!');
          this.myForm.reset();
        },
        () => {
          this.isLoading = false;
          this.showToastMessage('❌ Failed to send message. Please try again.');
        }
      );
  }
  showToastMessage(message: string) {
    this.toastMessage = message;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 4000);
  }

  hideToast() {
    this.showToast = false;
  }

  get formIsInvalid() {
    return (
      (this.name.invalid && this.name.dirty && this.name.touched) ||
      (this.subject.invalid && this.subject.dirty && this.subject.touched) ||
      (this.message.invalid && this.message.dirty && this.message.touched)
    );
  }

  get emailIsInvalid() {
    return this.email.invalid && this.email.dirty && this.email.touched;
  }
}

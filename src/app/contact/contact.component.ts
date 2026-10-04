import { Component, OnInit } from '@angular/core';
import emailjs from '@emailjs/browser';

// ---------------------------------------------------------------------------
// EmailJS setup (all free, no backend server needed):
// 1. Create an account at https://www.emailjs.com
// 2. Add an Email Service (connect your Gmail) -> copy its "Service ID"
// 3. Create an Email Template with variables: {{from_name}}, {{from_email}},
//    {{message}} -> copy its "Template ID"
// 4. Account -> General -> copy your "Public Key"
// 5. Paste all three values below.
// ---------------------------------------------------------------------------
const EMAILJS_SERVICE_ID = 'service_xgcdbco';
const EMAILJS_TEMPLATE_ID = 'template_ufmoldk';
const EMAILJS_PUBLIC_KEY = 'mWmnQahPUY32siJBn';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  name = '';
  email = '';
  message = '';

  status: 'idle' | 'sending' | 'sent' | 'error' = 'idle';
  errorMsg = '';

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(form: any): void {
    if (form.invalid) {
      return;
    }

    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID') {
      this.status = 'error';
      this.errorMsg = 'The contact form isn\u2019t configured yet. Add your EmailJS IDs in contact.component.ts.';
      return;
    }

    this.status = 'sending';
    this.errorMsg = '';

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      {
        from_name: this.name,
        from_email: this.email,
        message: this.message
      },
      { publicKey: EMAILJS_PUBLIC_KEY }
    ).then(
      () => {
        this.status = 'sent';
        this.name = '';
        this.email = '';
        this.message = '';
        form.resetForm();
      },
      (err: any) => {
        this.status = 'error';
        this.errorMsg = 'Something went wrong sending your message. Please try again in a moment.';
        console.error('EmailJS error:', err);
      }
    );
  }
}

import { Component } from '@angular/core';

import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  error:any;
  message:any;

  public sendEmail(e: Event) {
    e.preventDefault();

    emailjs.sendForm('service_9j6jt9o', 'template_kdrp4kl', e.target as HTMLFormElement, 'aNvD0OnCeYSoRGMnl')
      .then((result: EmailJSResponseStatus) => {
        console.log(result.text);
        //alert('Message sent successfully!');
        this.message = "Message sent successfully!";
      }, (error) => {
        console.log(error.text);
        //alert('Failed to send the message. Please try again later.');
        this.error = "Failed to send the message. Please try again later.";
      });
  }

}

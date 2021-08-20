import { Injectable } from '@nestjs/common';
import { Email } from './email.model';

@Injectable()
export class EmailService {
  email: Email;

  sendEmailService(title: string, email: string, message: string) {
    const newMail = new Email(title, email, message);
    console.log(newMail);
    return newMail;
  }
}

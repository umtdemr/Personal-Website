import { Injectable } from '@nestjs/common';
import { Email } from './email.model';

@Injectable()
export class EmailService {
  sendEmailService(title: string, email: string, message: string) {
    const newMail = new Email(title, email, message);
    return newMail;
  }
}

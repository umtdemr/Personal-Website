import { Controller, Post, Body, Get } from '@nestjs/common';
import { EmailService } from './email.service';

@Controller('email')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  sendEmail(
    @Body('title') title: string,
    @Body('email') email: string,
    @Body('message') message: string,
  ): any {
    const data = this.emailService.sendEmailService(title, email, message);
    return { email: data.email, title: data.title, message: data.message };
  }
}

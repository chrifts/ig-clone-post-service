import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @EventPattern('check_health')
  async handleTestEvent(data: Record<string, unknown>) {
    console.log('event check_health reached')
    console.log(data)
  }

  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: string): string {
    console.log('Reached greeting')
    return `Hello ${name}`;
  }
}

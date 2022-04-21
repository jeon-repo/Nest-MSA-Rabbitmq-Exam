import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'greeting' })
  getGreetingMessage(name: Record<string, unknown>): string {
    console.log('controller getGreetingMessage -> ', name);
    return `그리팅 동기 Hello ${name.author}`;
  }

  @MessagePattern({ cmd: 'greeting-async' })
  async getGreetingMessageAysnc(name: string): Promise<string> {
    console.log('controller getGreetingMessageAsync -> ', name);
    return `그리팅 비동기 Hello ${name}`;
  }

  @EventPattern('sing-created')
  async handleGreetingEvent(data: Record<string, unknown>) {
    console.log('이벤트 받음 -> ', data);
    return data.author;
  }
}

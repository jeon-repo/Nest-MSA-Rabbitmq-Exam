import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/greeting')
  async getHello() {
    console.log('controller getHello -> ');
    // return this.appService.publishEvent();
    return this.appService.getHello();
  }

  @Get('/greeting-async')
  async getHelloAsync() {
    console.log('controller getHelloAsync -> ');
    return this.appService.getHelloAsync();
  }
}

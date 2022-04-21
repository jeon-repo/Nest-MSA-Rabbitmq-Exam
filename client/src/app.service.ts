import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class AppService {
  constructor(@Inject('GREETING_SERVICE') private client: ClientProxy) {}

  getHello() {
    const response = this.client.send(
      { cmd: 'greeting' },
      { bookName: 'way back home', author: '김필' },
    );
    console.log('service getHello -> ', response);
    return response;
  }

  async getHelloAsync() {
    const message = await this.client.send(
      { cmd: 'greeting-async' },
      'Progressive Coder',
    );
    console.log('service getHelloAsync -> ', message);
    return message;
  }

  async publishEvent() {
    const response = await this.client.emit('sing-created', {
      singName: 'Way Back Home',
      author: '김필',
    });

    console.log('리스폰스 -> ', response);
    return response;
  }
}

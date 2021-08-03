import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  // ()의 주소 입장 => sayHello()
  @Get('/hello')
  sayHello(): string {
    return 'Hello everyone';
  }

  @Post('/post')
  sayPost(): string {
    return 'Hello Post'
  }
}

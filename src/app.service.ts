import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello NestJS!';
  }

  getTest(): string {
    return 'Hello Test!';
  }
}

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// 이러한 형태의 함수는 데코레이터라고 부른다.
// *클래스에 함수 기능 추가한다. (클래스 위의 함수)
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// ctrl: url 가져온 후 함수 실행 (라우터)
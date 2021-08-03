// 모듈
// 모든 로직을 모아 앱 실행

import { Module } from '@nestjs/common';

// 이러한 형태의 함수는 데코레이터라고 부른다.
// *클래스에 함수 기능 추가한다. (클래스 위의 함수)
@Module({
  imports: [],
  controllers: [],
  providers: [],
})
export class AppModule {}

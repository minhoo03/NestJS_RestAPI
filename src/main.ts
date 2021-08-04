import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true, 
    forbidNonWhitelisted: true,
    transform: true,
  })); // middleware (유효성 체크) - 덕분에 DTO 사용 가능
  await app.listen(3000);
}
bootstrap();

// 1. whitelist    :  @Is.. 데코레이터가 없는 속성이 들어올 경우 제거 후 DB 제장
// 2. for..listed  :  whiteList에 없는 속성이 들어올 경우 HttpException (error) 반환
// 3. transform    :  client에서 보낸 데이터를 우리가 entity에 정해둔 타입으로 변환
// 3번 예시        :  URL의 id는 string이다. 그것을 우리가 정해둔 타입(number)로 변환해줌
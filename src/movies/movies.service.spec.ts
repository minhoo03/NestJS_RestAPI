// npm run test:watch
import { Test, TestingModule } from '@nestjs/testing';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;
  // 테스트 하기 전 실행
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  // 개별 테스트
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should be 4', () => {
    // 조건
    expect(2+2).toEqual(4)
  })
});

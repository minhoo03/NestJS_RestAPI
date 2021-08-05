// Data Transfer Object
// 부분 타입
// mapped-types : 타입 변환, 사용 할 수 있는 패키지

import { PartialType } from "@nestjs/mapped-types";
import { CreateMovieDto } from "./create-movie.dio";


export class UpdateMovieDto extends PartialType(CreateMovieDto) {
    // CreateMovieDto 상속, readonly title?: string;과 같다.
}
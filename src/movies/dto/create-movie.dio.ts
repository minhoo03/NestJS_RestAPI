// Data Transfer Object
// 데이터 전송 객체
// @Is...() decorator - 유효성 검사

import { IsNumber, IsOptional, IsString } from "class-validator";

export class CreateMovieDto {
    @IsString()
    readonly title: string;

    @IsNumber()
    readonly year: number;

    @IsOptional() // 필수가 아니어도 된다.
    @IsString({ each: true }) // ['', ''] 모든 속성이 string여야 한다.
    readonly geners: string[];
}

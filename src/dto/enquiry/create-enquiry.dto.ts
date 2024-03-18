import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class CreateEnquiryDto {
  @IsString()
  @ApiProperty({ example: 'Test' })
  readonly name: string;
}

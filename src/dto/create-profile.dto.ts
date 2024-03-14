import { IsNotEmpty, IsString, MaxLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class CreateProfileDto {
  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'John Doe' })
  readonly name: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'Male' })
  readonly gender: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'Hindu' })
  readonly religion: string;

  @IsString()
  @MaxLength(30)
  @IsNotEmpty()
  @ApiProperty({ example: 'Hindi' })
  readonly community: string;

  @IsEmail()
  @IsNotEmpty()
  @ApiProperty({ example: 'john@example.com' })
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({ example: '15th June,2001' })
  readonly date_of_birth: string;
}

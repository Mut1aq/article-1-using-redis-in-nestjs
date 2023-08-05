import { IsNotEmpty, IsString, MaxLength } from 'class-validator';

export class CreateDataDto {
  @MaxLength(2200, {
    message: 'value must be less than 2200',
  })
  @IsString({
    message: 'value must be a string',
  })
  @IsNotEmpty({
    message: 'value must be provided',
  })
  value!: string;
}

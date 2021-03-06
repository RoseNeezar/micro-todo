import { IsString, MaxLength, MinLength } from 'class-validator';

export class AuthCredentialDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(3)
  @MaxLength(20)
  password: string;

  constructor(username: string, password: string) {
    this.username = username;
    this.password = password;
  }
}

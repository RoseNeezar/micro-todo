import {
  ConflictException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import * as bcrypt from 'bcryptjs';
import { User } from 'src/entities/user.entity';
import { UserRepository } from 'src/entities/user.repository';
import { AuthCredentialDto } from './dto/auth-credentials.dto';
import { JwtPayload } from './jwt-payload.interface';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
  ) {}
  async signUp(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const { password, username } = authCredentialDto;
    const salt = await bcrypt.genSalt();
    const user: Partial<User> = {
      username,
      password: await this.hashPassword(password, salt),
      salt,
    };
    try {
      await this.userRepository.create(user).save();
      const payload: JwtPayload = { username };
      const accessToken = await this.jwtService.sign(payload, {
        expiresIn: '1500min',
      });

      return { accessToken };
    } catch (error: any) {
      if (error.code === '23505') {
        throw new ConflictException('Username already exists');
      } else {
        throw new InternalServerErrorException();
      }
    }
  }
  async signIn(
    authCredentialDto: AuthCredentialDto,
  ): Promise<{ accessToken: string }> {
    const username = await this.userRepository.validateUserPassword(
      authCredentialDto,
    );

    if (!username) {
      throw new UnauthorizedException('Invalid credentials');
    }
    const payload: JwtPayload = { username };
    const accessToken = await this.jwtService.sign(payload, {
      expiresIn: '1500min',
    });

    return { accessToken };
  }
  private async hashPassword(
    password: string,
    salt: string | number,
  ): Promise<string> {
    return bcrypt.hash(password, salt);
  }
}

import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from "src/user/user.service";
import { AuthDto } from './dto/auth.dto';
import { compare } from "bcryptjs";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ) { }

    async login(authDto: AuthDto) {
        const user = await this.userService.findByEmail(authDto.email)

        if (user && (await compare(authDto.password, user.password))) {
            const { password, ...result } = user;
            const payload = { sub: result.id, username: result.email }
            return {
                ...result,
                access_token: await this.jwtService.signAsync(payload, {
                    secret: 'Kopihtiam645_',
                    expiresIn: '60S'
                })
            }
        };

        throw new UnauthorizedException();
    }
}

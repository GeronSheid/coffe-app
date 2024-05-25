import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
    constructor(
        private dataBaseService: DatabaseService,
        private jwtService: JwtService
    ) {}

    async signIn(email: String, pass: String) {
        const user = await this.dataBaseService.getUserByEmail(email);
        if(user?.password !== pass) {
            throw new UnauthorizedException();
        }

        const payload = {sub: user.id, name: user.first_name, surname: user.second_name, email: user.email, role: user.role}

        return {
            access_token: await this.jwtService.signAsync(payload)
        };
    }
}

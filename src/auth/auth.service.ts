import { Injectable, UnauthorizedException } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';

@Injectable()
export class AuthService {
    constructor(private dataBaseService: DatabaseService) {}

    async signIn(email: String, pass: String) {
        const user = await this.dataBaseService.getUserByEmail(email);
        if(user?.password !== pass) {
            console.log(pass, user.password)
            throw new UnauthorizedException();
        }

        const {password, ...result} = user;

        return result;
    }
}

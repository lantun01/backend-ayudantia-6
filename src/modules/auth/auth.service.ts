import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(
        private userService: UsersService,
        private jwtService: JwtService
    ){}




    async login(UserLoginDto: UserLoginDto){
        const user = await this.userService.findOne(UserLoginDto.username)

        if(!user) return null;

        if(!user.validatePassword(UserLoginDto.password)) return null;

        //se valido la existencia del usuario y del password

        const Payload =user.getInfoToToken();

        const token = this.jwtService.sign(Payload);
        //crea el token con la info que obtubimos de payload
        return {
            token: token,
            user: user
        }

    }
}

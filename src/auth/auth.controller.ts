import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { IsPublic } from './is-public.decorator';
import { AuthDto } from './dtos/auth.dto';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    
    @HttpCode(HttpStatus.OK)
    @Post('login')
    @IsPublic()
    signIn(@Body() signInDto: AuthDto) {
        return this.authService.signIn(signInDto.email, signInDto.password);
    }
}

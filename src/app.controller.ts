import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  getHello() {
    return 'done';
  }

  @Get('/auth/google')
  @UseGuards(AuthGuard('google'))
  googleCallBack(@Req() req) {
    console.log(req.user);
    return req.user;
  }
}

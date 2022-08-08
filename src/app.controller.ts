import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  getHello() {}

  @Get('/auth/google')
  @UseGuards(AuthGuard('google'))
  googleCallBack(@Req() req) {
    return req.user;
  }
}

import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  getHello() {
    console.log('hihi');
  }

  @Get('/auth/facebook')
  @UseGuards(AuthGuard('google'))
  googleCallBack(@Req() req) {
    console.log(req.user);
    this.getHello();
    return req.user;
  }
}

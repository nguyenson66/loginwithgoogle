import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, VerifyCallback } from 'passport-google-oauth20';

@Injectable()
export class GoogleStrategy extends PassportStrategy(Strategy, 'google') {
  constructor() {
    super({
      clientID:
        '960210371244-g1tqt1u7e4fmr86frqtki8cukpcl18g4.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'http://localhost:3000/auth/google',
      scope: ['email', 'phone', 'profile'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: VerifyCallback,
  ) {
    const { emails, name, photos } = profile;

    console.log(profile);
    console.log(refreshToken);

    const user = {
      email: emails[0].value,
      firstName: name.givenName,
      lastName: name.familyName,
      picture: photos[0].value,
      accessToken,
    };

    return done(null, user);
  }
}

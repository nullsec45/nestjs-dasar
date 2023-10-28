import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { HeroModule } from './hero/hero.module';
import { UserModule } from './user/user.module';
@Module({
  imports: [RoleModule, HeroModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

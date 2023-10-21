import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoleModule } from './role/role.module';
import { HeroModule } from './hero/hero.module';
@Module({
  imports: [RoleModule, HeroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

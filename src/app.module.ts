import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HeroController } from './hero/hero.controller';
import { RoleModule } from './role/role.module';

@Module({
  imports: [RoleModule],
  controllers: [AppController, HeroController],
  providers: [AppService],
})
export class AppModule { }

import { CacheModule } from '@nestjs/cache-manager';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [CacheModule.register({ isGlobal: true })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

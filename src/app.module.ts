import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';

@Module({
  imports: [
   TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb+srv://wathanyuok:admin@awshowcase.fj5mq.mongodb.net/?retryWrites=true&w=majority&appName=AWshowcase',
    entities: [User],
   }),
    AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

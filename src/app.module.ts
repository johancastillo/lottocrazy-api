import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TicketsController } from './tickets/tickets.controller';
import { TicketsService } from './tickets/tickets.service';
import { TicketsModule } from './tickets/tickets.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TicketsModule,
    MongooseModule.forRoot('mongodb+srv://amarantto:GameOver2707.@cluster0.lxfowaz.mongodb.net/?retryWrites=true&w=majority')
  ],
  controllers: [AppController, TicketsController],
  providers: [AppService, TicketsService],
})
export class AppModule {}

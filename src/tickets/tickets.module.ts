import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ticketsSchema } from './schemas/ticket.schema';
import { TicketsController } from './tickets.controller';
import { TicketsService } from './tickets.service';

@Module({
    imports: [MongooseModule.forFeature([
        {name: 'tickets', schema: ticketsSchema}
    ])],
    controllers: [TicketsController],
    providers: [TicketsService]
})


export class TicketsModule {}

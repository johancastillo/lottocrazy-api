import { Controller, Delete, Get, Post, Put, Body, HttpCode, Param } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto'; 
import { Ticket } from './interfaces/tickets';
import { TicketsService } from './tickets.service';


@Controller('tickets')
export class TicketsController {

    constructor(private ticketService: TicketsService){}

    @Get()
    getTickets(): Ticket[]{
        return this.ticketService.getTickets();
    }

    @Get(':id')
    detailTicket(@Param('id') id: string): Ticket{
        return this.ticketService.getTicket(parseInt(id));
    }

    @Post()
    createTicket(@Body() ticket:CreateTicketDto):CreateTicketDto{
        console.log(ticket)
        return ticket
    }

    @Put(':id')
    cancelTicket(@Body() ticket:CreateTicketDto, @Param('id') id): object{
        return {id: id}
    }

    @Delete(':id')
    deleteTicket(@Param('id') id): object{
        console.log(id)
        return {id: id}
    }


}

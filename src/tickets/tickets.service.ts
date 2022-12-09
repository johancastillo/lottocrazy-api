import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ticket } from './interfaces/tickets';

@Injectable()
export class TicketsService {

    constructor(@InjectModel('ticket') private ticketModel: Model<Ticket>){}


  getTickets(): any {
      return this.ticketModel.find();
  }


  getTicket(id: number){
      return ""
  }

}

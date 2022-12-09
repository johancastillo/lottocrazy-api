import { Document } from "mongoose";

export interface Ticket extends Document {
    id?: number;
    title: string;
    description: string;
    done: boolean;
}
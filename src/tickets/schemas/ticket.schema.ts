
import {Schema} from "mongoose"

export const ticketsSchema = new Schema ({
    title: String,
    description: String,
    done: Boolean
})



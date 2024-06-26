import mongoose from "mongoose";

const ticketsCollection = "tickets";

const ticketSchema = new mongoose.Schema({
  code: { type: Number, unique: true, required: true, index: true },
  purchase_datetime: { type: Date, required: true, default: Date.now },
  amount: { type: Number, required: true },
  purchaser: { type: String, required: true },
});

const ticketModel = mongoose.model(ticketsCollection, ticketSchema);

export default ticketModel;

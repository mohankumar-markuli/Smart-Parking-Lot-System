import { Ticket } from "../entities/Ticket";

export interface FeeCalculationStrategy {
  calculateFee(
    ticket: Ticket
  ): number;
}
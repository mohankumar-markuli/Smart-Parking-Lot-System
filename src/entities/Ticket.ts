import { TicketStatus } from "../enums/ticketStatus";

import { ParkingSpot } from "./ParkingSpot";
import { Vehicle } from "./Vehicle";

export class Ticket {
  public exitTime: Date | null = null;

  public status: TicketStatus =
    TicketStatus.ACTIVE;

  constructor(
    public ticketId: string,
    public vehicle: Vehicle,
    public parkingSpot: ParkingSpot,
    public entryTime: Date
  ) {}

  closeTicket(): void {
    this.exitTime = new Date();
    this.status = TicketStatus.CLOSED;
  }

  getParkingDuration(): number {
    if (!this.exitTime) return 0;

    const durationMs =
      this.exitTime.getTime() -
      this.entryTime.getTime();

    return Math.ceil(
      durationMs / (1000 * 60 * 60)
    );
  }
}
import { ParkingFloor } from "./ParkingFloor";
import { Ticket } from "./Ticket";
import { Payment } from "./Payment";
import { Vehicle } from "./Vehicle";
import { DisplayPanel } from "./DisplayPanel";

import { ParkingLotStatus } from "../enums/ParkingLotStatus";
import { SpotType } from "../enums/spotType";

import { ParkingAllocationStrategy } from "../strategies/ParkingAllocationStrategy";
import { FeeCalculationStrategy } from "../strategies/FeeCalculationStrategy";

export class ParkingLot {
  constructor(
    public readonly lotId: string,
    public parkingFloors: ParkingFloor[],
    public allocationStrategy: ParkingAllocationStrategy,
    public feeCalculationStrategy: FeeCalculationStrategy,
    public displayPanel?: DisplayPanel
  ) {}

  private activeTickets: Map<string, Ticket> = new Map();

  private status: ParkingLotStatus = ParkingLotStatus.OPEN;

  checkIn(vehicle: Vehicle): Ticket {
    const spot = this.allocateSpot(vehicle);

    if (!spot) {
      throw new Error("No parking spot available");
    }

    spot.parkVehicle(vehicle);

    const ticket = new Ticket(
      crypto.randomUUID(),
      vehicle,
      spot,
      new Date()
    );

    this.activeTickets.set(ticket.ticketId, ticket);

    this.refreshDisplay();

    return ticket;
  }

  checkOut(ticketId: string): Payment {
    const ticket = this.activeTickets.get(ticketId);

    if (!ticket) {
      throw new Error("Invalid ticket");
    }

    ticket.closeTicket();

    const amount =
      this.feeCalculationStrategy.calculateFee(ticket);

    const payment = new Payment(
      crypto.randomUUID(),
      amount
    );

    payment.markCompleted();

    this.releaseSpot(ticket);

    this.activeTickets.delete(ticketId);

    this.refreshDisplay();

    return payment;
  }

  allocateSpot(vehicle: Vehicle) {
    return this.allocationStrategy.allocateSpot(
      vehicle,
      this.parkingFloors
    );
  }

  releaseSpot(ticket: Ticket): void {
    ticket.parkingSpot.unparkVehicle();
  }

  getAvailability(): Map<SpotType, number> {
    const availability = new Map<SpotType, number>();

    for (const floor of this.parkingFloors) {
      for (const spot of floor.parkingSpots) {
        if (!spot.isAvailable()) continue;

        const current =
          availability.get(spot.spotType) ?? 0;

        availability.set(
          spot.spotType,
          current + 1
        );
      }
    }

    return availability;
  }

  refreshDisplay(): void {
    this.displayPanel?.refresh(this.getAvailability());
  }

  isOpen(): boolean {
    return this.status === ParkingLotStatus.OPEN;
  }

  markUnderMaintenance(): void {
    this.status =
      ParkingLotStatus.UNDER_MAINTENANCE;
  }

  reopen(): void {
    this.status = ParkingLotStatus.OPEN;
  }
}
import { VehicleType } from "../enums/vehicleType";
import { Ticket } from "../entities/Ticket";

import { FeeCalculationStrategy } from "./FeeCalculationStrategy";

export class HourlyFeeCalculationStrategy
implements FeeCalculationStrategy {

  calculateFee(
    ticket: Ticket
  ): number {

    const hours =
      ticket.getParkingDuration();

    switch (ticket.vehicle.vehicleType) {

      case VehicleType.MOTORCYCLE:
        return hours * 10;

      case VehicleType.CAR:
        return hours * 20;

      case VehicleType.BUS:
        return hours * 50;

      default:
        return 0;
    }
  }
}
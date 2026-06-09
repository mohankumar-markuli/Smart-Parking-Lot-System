import { SpotStatus } from "../enums/spotStatus";
import { SpotType } from "../enums/spotType";
import { VehicleType } from "../enums/vehicleType";

import { Vehicle } from "./Vehicle";

export class ParkingSpot {
  private parkedVehicle: Vehicle | null = null;

  constructor(
    public spotId: string,
    public spotType: SpotType,
    public status: SpotStatus = SpotStatus.AVAILABLE
  ) {}

  canFitVehicle(vehicle: Vehicle): boolean {
    switch (vehicle.vehicleType) {
      case VehicleType.MOTORCYCLE:
        return true;

      case VehicleType.CAR:
        return (
          this.spotType === SpotType.COMPACT ||
          this.spotType === SpotType.LARGE
        );

      case VehicleType.BUS:
        return this.spotType === SpotType.LARGE;

      default:
        return false;
    }
  }

  parkVehicle(vehicle: Vehicle): void {
    this.parkedVehicle = vehicle;
    this.status = SpotStatus.OCCUPIED;
  }

  unparkVehicle(): void {
    this.parkedVehicle = null;
    this.status = SpotStatus.AVAILABLE;
  }

  isAvailable(): boolean {
    return this.status === SpotStatus.AVAILABLE;
  }

  getParkedVehicle(): Vehicle | null {
    return this.parkedVehicle;
  }
}
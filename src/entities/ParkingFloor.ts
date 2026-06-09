import { FloorStatus } from "../enums/floorStatus";
import { SpotType } from "../enums/spotType";

import { ParkingSpot } from "./ParkingSpot";

export class ParkingFloor {
  constructor(
    public floorNumber: number,
    public parkingSpots: ParkingSpot[],
    public status: FloorStatus = FloorStatus.ACTIVE
  ) {}

  addSpot(spot: ParkingSpot): void {
    this.parkingSpots.push(spot);
  }

  removeSpot(spotId: string): void {
    this.parkingSpots =
      this.parkingSpots.filter(
        spot => spot.spotId !== spotId
      );
  }

  getAvailableSpots(
    spotType: SpotType
  ): ParkingSpot[] {
    return this.parkingSpots.filter(
      spot =>
        spot.spotType === spotType &&
        spot.isAvailable()
    );
  }

  getAvailabilityCount(
    spotType: SpotType
  ): number {
    return this.getAvailableSpots(spotType).length;
  }
}
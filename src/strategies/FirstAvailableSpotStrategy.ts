import { ParkingFloor } from "../entities/ParkingFloor";
import { ParkingSpot } from "../entities/ParkingSpot";
import { Vehicle } from "../entities/Vehicle";

import { ParkingAllocationStrategy } from "./ParkingAllocationStrategy";

export class FirstAvailableSpotStrategy
implements ParkingAllocationStrategy {

  allocateSpot(
    vehicle: Vehicle,
    floors: ParkingFloor[]
  ): ParkingSpot | null {

    for (const floor of floors) {
      for (const spot of floor.parkingSpots) {
        if (
          spot.isAvailable() &&
          spot.canFitVehicle(vehicle)
        ) {
          return spot;
        }
      }
    }

    return null;
  }
}
import { ParkingFloor } from "../entities/ParkingFloor";
import { ParkingSpot } from "../entities/ParkingSpot";
import { Vehicle } from "../entities/Vehicle";

export interface ParkingAllocationStrategy {
  allocateSpot(
    vehicle: Vehicle,
    floors: ParkingFloor[]
  ): ParkingSpot | null;
}
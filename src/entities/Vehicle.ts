import { VehicleType } from "../enums/vehicleType";

export class Vehicle {
  constructor(
    public registrationNumber: string,
    public vehicleType: VehicleType
  ) {}

  getVehicleType(): VehicleType {
    return this.vehicleType;
  }
}